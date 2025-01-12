import { useState, useRef } from 'react';
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Upload } from 'lucide-react';

interface FileUploaderProps {
  label: string;
  onFileSelect: (file: File) => void;
  accept?: string;
}

export const FileUploader = ({ label, onFileSelect, accept }: FileUploaderProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="mr-2 h-4 w-4" />
          Choose File
        </Button>
        {selectedFile && (
          <span className="text-sm text-gray-500">
            {selectedFile.name}
          </span>
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept={accept}
        className="hidden"
      />
    </div>
  );
};
