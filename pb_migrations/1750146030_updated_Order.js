/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4289593975")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number3257917790",
    "max": null,
    "min": null,
    "name": "total",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4289593975")

  // remove field
  collection.fields.removeById("number3257917790")

  return app.save(collection)
})
