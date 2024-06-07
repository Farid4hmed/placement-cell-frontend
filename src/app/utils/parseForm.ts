// utils/parseForm.ts
import { NextApiRequest } from 'next';
import formidable from 'formidable';

export const parseForm = async (req: NextApiRequest) => {
  return new Promise<{ fields: formidable.Fields, files: formidable.Files }>((resolve, reject) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};
