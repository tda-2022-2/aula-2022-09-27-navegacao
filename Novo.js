import { Alert, Button, FlatList, ScrollView, Text, TextInput, View } from "react-native";

export default function Novo({ navigation, route }) {
    return (
        <View style={{ padding: 20 }}>
            <TextInput value={route.params.texto} style={{ padding: 5, borderWidth: 1, borderColor: 'gray', marginBottom: 10 }} />
            <Button title="Salvar" onPress={() => navigation.goBack()}/>
        </View>
    )
}

// export default function List() {
//     return (
//         <ScrollView style={{ flex: 1, margin: 10, alignContent: "flex-start" }}>
//             {
//                 dados.map(d => (
//                     <View style={{ paddingTop: 10, borderColor: 'black',
//                         borderWidth: 1, alignSelf: "stretch" }}>
//                         <Text style={{ textAlign: "center", textAlignVertical: "center" }}>{d.texto}</Text>
//                     </View>
//                 ))
//             }
//         </ScrollView>
//     )
// }