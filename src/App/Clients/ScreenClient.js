export default class ScreenClient {
    /**
     * @param deduct
     * @returns {number}
     */
    getWidth(deduct = 0) {
        const width = document.documentElement.clientWidth;
        return width + deduct;
    }

    /**
     * @param deduct
     * @returns {number}
     */
    getHeight(deduct = 0) {
        const height = document.documentElement.clientHeight;
        return height + deduct;
    }
}