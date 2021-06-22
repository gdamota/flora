import bottle
import json
import requests

app = bottle.Bottle()


@app.get("/")
def _get_all():
    # return all products for the shop page
    pass


@app.get("/<category_id>")
def _get_all_category(category_id):
    # return all products in a given category
    pass


@app.get("/<category_id>/<product_id>")
def _get_all_products(product_id):
    # return single product for item page
    pass
