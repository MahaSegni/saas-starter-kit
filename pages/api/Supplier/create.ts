export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      try {
        const { name, email, phone, address } = req.body;
        const supplier = await prisma.supplier.create({
          data: { name, email, phone, address },
        });
        res.status(201).json(supplier);
      } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création du fournisseur' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  