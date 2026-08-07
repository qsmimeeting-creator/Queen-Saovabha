export type NavigationTab = 'home' | 'vaccines' | 'schedule' | 'map' | 'contact' | 'news';

export type CategoryFilter = 'all' | 'child' | 'adult_senior' | 'pregnant' | 'traveler' | 'booster';

export interface Vaccine {
  id: string;
  nameTh: string;
  nameEn: string;
  price: number;
  packagePrice?: number;
  packageDoses?: number;
  category: CategoryFilter;
  protectionGroup: string;
  recommendedAge: string;
  dosesCount: string;
  status: 'available' | 'limited' | 'booking_required';
  description: string;
  sideEffects: string[];
  preparation: string;
  tags: string[];
  popular?: boolean;
}

export interface ScheduleItem {
  id: string;
  clinicName: string;
  days: string;
  hours: string;
  targetAudience: string;
  locationRoom: string;
  statusBadge: 'เปิดให้บริการ' | 'รับนัดหมายล่วงหน้า' | 'ปิดทำการวันหยุด';
  notes?: string;
}

export interface ProcedureStep {
  stepNumber: number;
  title: string;
  description: string;
  estimatedTime: string;
  badge: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'ประกาศสำคัญ' | 'โปรโมชั่น' | 'ความรู้สุขภาพ' | 'วัคซีนใหม่';
  date: string;
  imageUrl: string;
  isPinned?: boolean;
  author?: string;
  readTime?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'การเตรียมตัว' | 'ผลข้างเคียง' | 'สิทธิการรักษา' | 'นัดหมาย';
}

export interface CartItem {
  vaccine: Vaccine;
  quantity: number;
  usePackage?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
