
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cards = [
    { title: 'Abhishek Gupta', subtitle: '마케팅, 2년 경력', details: '트위터 관리, 블로그 글 작성' },
    { title: 'Priya Gupta', subtitle: '디자인, 3년 경력', details: 'UI/UX 디자인, 프로토타이핑' },
  ];
  res.status(200).json(cards);
}
                