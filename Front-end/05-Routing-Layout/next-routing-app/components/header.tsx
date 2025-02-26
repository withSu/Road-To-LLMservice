//메뉴 링크를 위한 Link 컴포넌트 참조하기
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex bg bg-gray-400 m-1">
      <div className="w-8/12 mt-4 px-4">
        <Link href="/">Home|</Link>
        <Link href="/company/intro">회사소개|</Link>
        <Link href="/">제품분류|</Link>
        <Link href="/">블로깅|</Link>
        <Link href="/">블로깅상세|</Link>
        <Link href="/">문의하기</Link>
        
      </div>

      <div className="w-4/12 mt-4 px-4 text-right">
      <Link href="/auth/login">로그인|</Link>
      <Link href="/auth/entry">회원가입|</Link>
      <Link href="/mypage/profile">프로필|</Link>
      <Link href="/mypage/settings/config">환경설정|</Link>

      
      
      
      </div>
    </div>
  );
};

export default Header;
