import Button from '@mui/material/Button';
import { CustomDialog } from '@shared/ui';

export default function Home() {
  return (
    <div>
      <div className="text-4xl text-primary">
        متن با رنگ اصلی‌ تنظیم شده در تم mui با استفاده از کلاس های tailwind
      </div>
      <Button variant="outlined" color="secondary">
        {' '}
        یک دکمه ی متریال
      </Button>
      <CustomDialog>کیرم دهن ممدرضا</CustomDialog>
    </div>
  );
}
