import { Text, View } from "react-native";
import { styles } from "../../styes/indexStyles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congratulations NAS!</Text>
      <Text>You have started your first React Native Project</Text>
      <Link href={"/notifications"} style={styles.button}>
          <Text style={styles.buttonText}>Go to Notification</Text>
      </Link>
      <Link href={"/profile"} style={styles.button}>
          <Text style={styles.buttonText}>Go to Profile</Text>
      </Link>
    </View>
  );
}
