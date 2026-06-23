import { Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export function PrimaryButton({ title, onPress, disabled }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`w-full py-3.5 rounded-xl mt-4 items-center ${
        disabled ? "bg-indigo-400" : "bg-indigo-600 active:bg-indigo-700"
      }`}
    >
      <Text className="text-white font-bold text-base">{title}</Text>
    </TouchableOpacity>
  );
}
