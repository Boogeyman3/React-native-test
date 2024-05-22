import { View, Text, TextInput} from "react-native";



const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {

  return (
    <View>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full px-4 rounded-md  border p-2 border-[#CBD5E1] focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-black font-psemibold text-sm"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          {...props}
        />

      
      </View>
    </View>
  );
};

export default FormField;