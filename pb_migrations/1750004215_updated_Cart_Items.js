/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3470301185")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_176316437",
    "hidden": false,
    "id": "relation485965105",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Product",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3470301185")

  // remove field
  collection.fields.removeById("relation485965105")

  return app.save(collection)
})
