const config = {};

config.endpoint = process.env.URI;
config.key =  process.env.PRIMARY_KEY;
config.database = "ToDoList";
config.container = "Items";

module.exports = config;