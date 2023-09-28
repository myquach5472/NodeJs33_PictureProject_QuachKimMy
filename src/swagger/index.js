/**
 * @swagger
 * /api/nguoiDung/get-all-user:
 *   get:
 *     description: responses
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success
 */

/**
 * @swagger
 * /api/nguoiDung/updateUser/{id}:
 *  post:
 *      description: responses
 *      tags: [User]
 *      token:
 *      parameters:
 *      - in: path
 *        name: id
 *      - in: body
 *        name: user
 *        schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             mat_khau:
 *               type: string
 *             ho_ten:
 *               type: string
 *             tuoi:
 *               type: number
 *             anh_dai_dien:
 *               type: string
 *      responses:
 *          200: 
 *              description: res   
 */