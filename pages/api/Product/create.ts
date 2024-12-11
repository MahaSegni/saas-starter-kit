export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      try {
        const { name, sku, price, stock, categoryId, supplierId } = req.body;
        const product = await prisma.product.create({
          data: { name, sku, price, stock, categoryId, supplierId },
        });
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création du produit' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  