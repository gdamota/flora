import React from "react";
import {createProduct} from "..//graphql/mutations";
import {API} from "aws-amplify";
import {withAuthenticator} from "@aws-amplify/ui-react";
import Storage from "@aws-amplify/storage";

class ManagementPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        description: "",
        cost: "",
        price: "",
        quantity: ""
      },
      photoStrings: [],
      photos: [],
      categoryID: "fe1a274d-3460-4c3f-814c-6fd7a40c969d"
    };
    this.submit = this.submit.bind(this);
  }

  handleChange = (key, value) => {
    this.setState({
      fields: {...this.state.fields, [key]: value}
    });
  };

  handleSelect = cat => {
    this.setState({
      categoryID: cat
    });
  };

  formData = () => {
    let data = {};
    Object.keys(this.state.fields).map((key, index) => {
      data[key] = this.state.fields[key];
    });
    data["categoryID"] = this.state.categoryID;
    data["photos"] = this.state.photoStrings;
    return data;
  };

  uploadImage = () => {
    for (let i in this.state.photoStrings) {
      Storage.put(this.state.photoStrings[i], this.state.photos[i], {
        contentType: this.state.photos[i].type
      })
        .then(result => {
          this.upload = null;
          console.log({response: "Success uploading file!"});
        })
        .catch(err => {
          console.log({response: `Cannot uploading file: ${err}`});
        });
    }
  };

  async setPhotos(filesList, COLLECTION_ID_MAP) {
    this.setState({
      photos: [...this.state.photos, filesList[0]],
      photoStrings: [
        ...this.state.photoStrings,
        "/photos/" +
          COLLECTION_ID_MAP[this.state.categoryID] +
          "/" +
          filesList[0].name
      ]
    });
    console.log(this.state);
  }

  async submit(event) {
    event.preventDefault();
    console.log(this.uploadImage());
    await API.graphql({
      query: createProduct,
      variables: {input: this.formData()}
    }).then(res => {
      console.log(res);
      alert("Product Added!");
    });
  }

  render() {
    const COLLECTION_ID_MAP = {
      "fe1a274d-3460-4c3f-814c-6fd7a40c969d": "bouquets",
      "88cb9fb7-285b-495b-b9d4-2027c01f3d97": "boutonnieres",
      "d6f63ade-c560-477e-9989-85b1d204b50c": "bracelets",
      "2a64e1db-3ea1-4438-9e6f-51017517442f": "earrings",
      "cfa85a57-44c2-4e1f-a1ce-2c7d7f244e43": "wearables"
    };
    return (
      <div>
        <h2>Add product</h2>
        <form onSubmit={this.submit}>
          {Object.keys(this.state.fields).map((key, index) => {
            return (
              <input
                className="input"
                type="text"
                name={key}
                placeholder={key}
                value={this.state.fields[key]}
                onChange={e => this.handleChange(key, e.target.value)}
              />
            );
          })}
          <div>
            <select
              value={this.state.categoryID}
              onChange={e => this.handleSelect(e.target.value)}
            >
              {Object.keys(COLLECTION_ID_MAP).map((key, index) => {
                return <option value={key}>{COLLECTION_ID_MAP[key]}</option>;
              })}
            </select>
          </div>
          <input
            type="file"
            onChange={e => this.setPhotos(e.target.files, COLLECTION_ID_MAP)}
          />
          <span>
            {"Photos Uploaded: " + JSON.stringify(this.state.photoStrings)}
          </span>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withAuthenticator(ManagementPage);
