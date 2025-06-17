/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1149754179")

  // update collection data
  unmarshal({
    "name": "Cart"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1149754179")

  // update collection data
  unmarshal({
    "name": "Carts"
  }, collection)

  return app.save(collection)
})
