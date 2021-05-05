
module.exports = async (context, req) => {
  return {
    body: context.bindings.connection
  };
}