/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4289593975")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select20636234522",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "confirmed",
      "shipped",
      "delivered"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4289593975")

  // remove field
  collection.fields.removeById("select20636234522")

  return app.save(collection)
})
