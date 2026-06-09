import BentoLayout from './BentoLayout';
import { bentoContent, bentoSection, bentoContent2, bentoSection2 } from './BentoContent';

export default function Bento() {
  return (
    <div>
      <BentoLayout 
      id = {bentoSection.id} 
      eyebrow = {bentoSection.eyebrow}
      title = {bentoSection.title}
      cards = {bentoContent}
      />
      <BentoLayout 
      id = {bentoSection2.id} 
      eyebrow = {bentoSection2.eyebrow}
      title = {bentoSection2.title}
      cards = {bentoContent2}
      />
      
    </div>
  );
}