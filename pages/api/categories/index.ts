export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      try {
        const categories = await prisma.category.findMany({
          include: { products: true },
        });
        res.status(200).json(categories);
      } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des catégories' });
      }
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  