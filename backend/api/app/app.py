import bottle
import src

bottle.debug(True)
app = application = bottle.Bottle()
v0.mount(app)


def inspect_routes(an_app):
    for route in an_app.routes:
        if "mountpoint" in route.config:
            prefix = route.config["mountpoint.prefix"]
            subapp = route.config["mountpoint.target"]

            for some_prefixes, a_route in inspect_routes(subapp):
                yield [prefix] + some_prefixes, a_route
        else:
            yield [], route


# Print routes into log
print("These routes are mounted")
print("************************")

for prefixes, route in inspect_routes(app):
    abs_prefix = "/".join(part for p in prefixes for part in p.split("/"))
    print(
        "{0}{1} METHOD: {2} -> {3}".format(
            abs_prefix, route.rule, route.method, route.callback
        )
    )

print("************************")
