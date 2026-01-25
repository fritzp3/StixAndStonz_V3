'use client';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Drawer({ open, onClose, children }: DrawerProps) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div className='fixed inset-0 bg-black/40 z-40' onClick={onClose} />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-6 bottom-6 w-[420px] max-w-[90vw]
          h-[400px] bg-white/90 z-50 shadow-2xl
          rounded-2xl transform transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : 'translate-x-[120%]'}
        `}
      >
        {/* Header */}
        <div className='flex items-center justify-between p-4'>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-800'
          >
            ✕ Close
          </button>
        </div>

        {/* Body */}
        <div className='p-4 overflow-y-auto h-[calc(100%-64px)]'>
          {children}
        </div>
      </div>
    </>
  );
}
