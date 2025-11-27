import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="w-full max-w-md p-6">
        <style>{`
          .cl-root {
            --colors-primary: #3d4c41 !important;
            --colors-inputBackground: #FFFFFF !important;
            --colors-inputBorder: #e0e0e0 !important;
            --colors-textPrimary: #1a1a1a !important;
            --colors-textSecondary: #666666 !important;
          }
          .cl-card {
            background-color: #FFFFFF !important;
            border: 1px solid #e0e0e0 !important;
            border-radius: 12px !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
          }
          .cl-headerTitle {
            color: #3d4c41 !important;
            font-family: 'Playfair Display', serif !important;
            font-size: 28px !important;
          }
          .cl-headerSubtitle {
            color: #666666 !important;
            font-family: 'Poppins', sans-serif !important;
          }
          .cl-button-primary {
            background-color: #3d4c41 !important;
            color: white !important;
            font-family: 'Outfit', sans-serif !important;
          }
          .cl-button-primary:hover {
            background-color: #2f3f37 !important;
          }
          .cl-form-field input,
          .cl-form-field textarea {
            background-color: #FFFFFF !important;
            border: 1px solid #e0e0e0 !important;
            color: #1a1a1a !important;
            font-family: 'Poppins', sans-serif !important;
          }
          .cl-form-field input:focus,
          .cl-form-field textarea:focus {
            border-color: #3d4c41 !important;
            box-shadow: 0 0 0 3px rgba(61, 76, 65, 0.1) !important;
          }
          .cl-label {
            color: #1a1a1a !important;
            font-family: 'Poppins', sans-serif !important;
            font-weight: 600 !important;
          }
        `}</style>
        <SignIn />
      </div>
    </div>
  );
}
