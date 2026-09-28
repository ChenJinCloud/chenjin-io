import type { Metadata } from 'next';
import BookshelfClient from './BookshelfClient';

export const metadata: Metadata = {
  title: '书架',
  description: '陈今读过的书、留下的划线和后来形成的判断。',
  alternates: { canonical: '/resources/bookshelf' },
};

export default function Page() {
  return <BookshelfClient />;
}
