module.exports = {
    // 分页类
    pagination: (currentPage, pageSize) => {
        return {
            offset: (currentPage - 1) * pageSize,
            limit: Number(pageSize)
        }
    }
}