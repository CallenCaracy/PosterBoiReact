// // If using ShadCN's Sonner wrapper
// import { useSonner, toast as sonnerToast, Toaster } from "@/components/ui/sonner";
// import * as React from "react";

// type ToastOptions = {
//   title?: React.ReactNode;
//   description?: React.ReactNode;
//   duration?: number;
//   action?: React.ReactNode;
//   variant?: "default" | "success" | "error" | "warning" | "info";
// };

// // Create variant styles
// const variantStyles = {
//   success: "border-green-500 bg-green-50 text-green-900",
//   error: "border-red-500 bg-red-50 text-red-900",
//   warning: "border-yellow-500 bg-yellow-50 text-yellow-900",
//   info: "border-blue-500 bg-blue-50 text-blue-900",
//   default: "",
// };

// // Main toast function
// function toast({ 
//   title, 
//   description, 
//   duration = 5000, 
//   action,
//   variant = "default" 
// }: ToastOptions): string | number {
  
//   const className = variantStyles[variant];
  
//   return sonnerToast(
//     <div className={`p-4 rounded-lg border ${className}`}>
//       <div className="flex flex-col gap-1">
//         {title && <div className="font-bold">{title}</div>}
//         {description && <div className="text-sm">{description}</div>}
//         {action && <div className="mt-2">{action}</div>}
//       </div>
//     </div>,
//     { duration }
//   );
// }

// // Convenience methods (same as above)...

// function useToast() {
//   // ShadCN Sonner might not expose useToaster, so we need to check
//   // If not available, we can create a simpler version
//   const showToast = (options: ToastOptions): string | number => {
//     return toast(options);
//   };

//   const dismiss = (toastId?: string | number) => {
//     if (toastId) {
//       // Use Sonner's dismiss if available, otherwise skip
//       try {
//         (sonnerToast as any).dismiss?.(toastId);
//       } catch (e) {
//         console.warn("Toast dismissal not supported");
//       }
//     }
//   };

//   const dismissAll = () => {
//     try {
//       (sonnerToast as any).dismiss?.();
//     } catch (e) {
//       console.warn("Toast dismissal not supported");
//     }
//   };

//   return {
//     toast: showToast,
//     dismiss,
//     dismissAll,
//     // Convenience methods
//     success: (options: Omit<ToastOptions, "variant">) => toast.success(options),
//     error: (options: Omit<ToastOptions, "variant">) => toast.error(options),
//     warning: (options: Omit<ToastOptions, "variant">) => toast.warning(options),
//     info: (options: Omit<ToastOptions, "variant">) => toast.info(options),
//   };
// }

// export { toast, useToast, Toaster };
// export type { ToastOptions };