export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      try {
        const { name } = req.body;
        const category = await prisma.category.create({ data: { name } });
        res.status(201).json(category);
      } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de la catégorie' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  