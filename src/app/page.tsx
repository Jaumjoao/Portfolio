"use client";

import React from 'react';
import { MenuSection } from "@/components/MenuSection";
import { SobreSection } from "@/components/SobreSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectSection } from "@/components/ProjectSection";
import { ContatoSection } from "@/components/ContatoSection";

const Page: React.FC = () => {

  return (

    <div className='overflow-hidden'>
      <div>
        <MenuSection />
      </div>
      <div id="about">
        <SobreSection />
      </div>

      <div id="skill">
      <SkillsSection />
      </div>

      <div id="projects" className="bg-[#141414] h-screen w-screen flex flex-col">
      <ProjectSection />
      </div>

      <div id="contact">
      <ContatoSection />
      </div>
    </div>
  );
};

export default Page;
