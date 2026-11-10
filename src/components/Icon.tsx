import {
  Award,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Clock,
  Dumbbell,
  Eye,
  Flame,
  Gift,
  GraduationCap,
  Info,
  Medal,
  Menu,
  MapPin,
  MessageCircle,
  Navigation,
  PersonStanding,
  Phone,
  SprayCan,
  Star,
  Users,
  X,
  ZoomIn,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { CSSProperties } from 'react';

/**
 * Maps the icon names used across the site to Lucide icons.
 * Icons are bundled with the app, so they render instantly and offline
 * (no external icon-font request, no flash of raw icon words).
 */
const ICONS: Record<string, LucideIcon> = {
  award_star: Award,
  bolt: Zap,
  calendar_today: CalendarDays,
  call: Phone,
  chat: MessageCircle,
  check: Check,
  check_circle: CircleCheck,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  close: X,
  directions: Navigation,
  done: Check,
  expand_more: ChevronDown,
  fitness_center: Dumbbell,
  group: Users,
  info: Info,
  local_fire_department: Flame,
  location_on: MapPin,
  menu: Menu,
  redeem: Gift,
  sanitizer: SprayCan,
  schedule: Clock,
  school: GraduationCap,
  sports: Medal,
  sports_gymnastics: PersonStanding,
  star: Star,
  stars: Star,
  verified: BadgeCheck,
  visibility: Eye,
  zoom_in: ZoomIn,
};

interface IconProps {
  name: string;
  /** Size follows the `text-[..px]` utility passed in className (default 24px). */
  className?: string;
  style?: CSSProperties;
}

export default function Icon({ name, className = '', style }: IconProps) {
  const Cmp = ICONS[name] ?? Dumbbell;
  return <Cmp aria-hidden="true" className={`icon ${className}`.trim()} style={style} strokeWidth={2} />;
}
