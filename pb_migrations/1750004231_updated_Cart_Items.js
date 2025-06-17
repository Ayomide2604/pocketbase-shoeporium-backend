/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3470301185")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1149754179",
    "hidden": false,
    "id": "relation2878416777",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Cart",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3470301185")

  // remove field
  collection.fields.removeById("relation2878416777")

  return app.save(collection)
})
