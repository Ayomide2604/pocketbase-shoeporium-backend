/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1149754179")

  // remove field
  collection.fields.removeById("relation3776899405")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1149754179")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_176316437",
    "hidden": false,
    "id": "relation3776899405",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "items",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
