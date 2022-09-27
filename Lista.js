import { Alert, FlatList, ScrollView, Text, View } from "react-native";

const dados = [
    {
        id: 1,
        texto: "Ir no super"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
    {
        id: 2,
        texto: "Pagar boleto"
    },
];


const renderiza = ({ item }) => (
    <View style={{
        paddingTop: 10, borderColor: 'black',
        borderWidth: 1, alignSelf: "stretch"
    }}>
        <Text style={{ textAlign: "center", textAlignVertical: "center" }}>{item.texto}</Text>
    </View>
);

export default function Lista() {
    return (
        <FlatList 
            style={{ flex: 1, margin: 10, alignContent: "flex-start" }} 
            data={dados}
            renderItem={renderiza}
            keyExtractor={d => d.id}
            refreshing={true}
            onRefresh={() => Alert.alert('hey', 'ok')}
        />
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