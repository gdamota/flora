from v0 import payment as payment
from v0 import product as product
from v0 import review as review


def mount(app):
    """ Mounts each endpoint """
    app.mount("/product", product.app)
    app.mount("/payment", payment.app)
    app.mount("/review", review.app)
