module.exports = {
    delete: async (entity, id) => {
        await entity.destroy({
            where: {
                id: id
            }
        });
    },
    update: async (entity, obj, id) => {
        await entity.update(obj, {
            where: {
                id: id
            }
        });
    }
}