import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import Copyright from '@/app/components/footer/copyright';

import Main from '@/app/ui/main/main';

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <Copyright />
    </div>
  );
}
