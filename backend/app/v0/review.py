import bottle
import json
import requests

app = bottle.Bottle()


@app.get("/<product_id>")
def _get_all(product_id):
    # return all reviews for a product for the item page
    pass


@app.post("/<product_id>")
def _get_all_category(product_id, user):
    # post a new user review
    pass
