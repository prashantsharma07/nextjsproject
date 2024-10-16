
import React from 'react';
import Card from '../molecules/Card';
import Button from '../atoms/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-10 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">최고의 실력을 가진 외국인 인재를 찾고 계신가요?</h1>
      <p className="mb-8">블록 및 인사관리에 부담없이 1주일 이내에 원격으로 채용해보세요.</p>
      
      <div className="flex justify-center space-x-4 mb-6">
        <Card title="Abhishek Gupta" subtitle="마케팅, 2년 경력" details="트위터 관리, 블로그 글 작성" />
        <Card title="Priya Gupta" subtitle="디자인, 3년 경력" details="UI/UX 디자인, 프로토타이핑" />
      </div>

      <div className="flex justify-center space-x-4">
        <Button>해외 마케팅</Button>
        <Button>퍼블리셔</Button>
        <Button>카드원(제조사)</Button>
        <Button>해외 세일즈</Button>
      </div>
    </div>
  );
};

export default HeroSection;
                