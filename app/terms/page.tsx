import { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | Sangsangwoori AI",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">이용약관</h1>
      <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
        <p className="lead text-foreground font-medium text-lg">제1조 (목적)</p>
        <p>본 약관은 상상우리(이하 "회사")가 제공하는 상상우리 AI 교육콘텐츠연구소 및 플랫폼(이하 "서비스")의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">제2조 (정의)</h2>
        <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>"서비스"란 단말기(PC, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 회원이 이용할 수 있는 상상우리 AI 관련 제반 서비스를 의미합니다.</li>
          <li>"회원"이란 회사의 서비스에 접속하여 본 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</li>
          <li>"아이디(ID)"란 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다. (본 서비스는 이메일 매직링크 및 소셜 로그인을 기반으로 합니다.)</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">제3조 (약관의 게시와 개정)</h2>
        <p>회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다. 회사는 "약관의 규제에 관한 법률", "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련 법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">제4조 (이용계약 체결)</h2>
        <p>이용계약은 회원이 되고자 하는 자(이하 "가입신청자")가 약관의 내용에 대하여 동의를 한 다음 회원가입신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.</p>

        <p className="mt-12 text-sm">부칙<br/>본 약관은 2026년 5월 10일부터 시행됩니다.</p>
      </div>
    </div>
  );
}
