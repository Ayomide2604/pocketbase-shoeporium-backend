/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3470301185")

  // update collection data
  unmarshal({
    "name": "Cart_Item"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3470301185")

  // update collection data
  unmarshal({
    "name": "Cart_Items"
  }, collection)

  return app.save(collection)
})
