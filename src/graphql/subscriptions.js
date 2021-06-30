/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Products {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Products {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Products {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      products
      price
      datetime
      status
      address
      zip_code
      city
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      products
      price
      datetime
      status
      address
      zip_code
      city
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      products
      price
      datetime
      status
      address
      zip_code
      city
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      name
      description
      cost
      price
      quantity
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Category {
        id
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      name
      description
      cost
      price
      quantity
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Category {
        id
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      name
      description
      cost
      price
      quantity
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Category {
        id
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
