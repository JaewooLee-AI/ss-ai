import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | Sangsangwoori AI",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">개인정보처리방침</h1>
      <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
        <p className="lead text-foreground font-medium text-lg">상상우리(이하 "회사")는 「개인정보 보호법」 등 관련 법령을 준수하며, 정보주체의 개인정보 보호 및 권익을 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 두고 있습니다.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">1. 개인정보의 처리 목적</h2>
        <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>회원 가입 및 관리:</strong> 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지</li>
          <li><strong>재화 또는 서비스 제공:</strong> 서비스 제공, 맞춤형 콘텐츠(CIG16 진단 등) 제공, B2B 솔루션 매칭 및 상담</li>
          <li><strong>마케팅 및 광고에의 활용:</strong> 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 참여기회 제공</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">2. 수집하는 개인정보 항목</h2>
        <p>회사는 서비스 제공을 위해 다음의 개인정보 항목을 수집하고 있습니다.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>필수항목:</strong> 이메일 주소, 이름, 프로필 이미지(소셜 로그인 시)</li>
          <li><strong>선택항목:</strong> 소속 회사명, 연락처, 전문 분야, 이력서(전문가 지원 시)</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">3. 개인정보의 보유 및 이용기간</h2>
        <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다. 원칙적으로 회원 탈퇴 시 지체 없이 파기합니다.</p>

        <p className="mt-12 text-sm">본 방침은 2026년 5월 10일부터 시행됩니다.</p>
      </div>
    </div>
  );
}
