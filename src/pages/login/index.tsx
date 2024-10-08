import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator // Importando o ActivityIndicator
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true);
            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios');
            }

            setTimeout(() => {
                if (email === 'cindy@gmail.com' && password === '123456') {
                    Alert.alert('Logado com sucesso!');
                } else {
                    Alert.alert('Usuário não encontrado!');
                }
                setLoading(false);
            }, 3000);

        } catch (error) {
            console.log(error);
        } finally {
            // Você pode adicionar alguma lógica adicional se necessário
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}> Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}> ENDEREÇO DE EMAIL</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.Input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons 
                        name='email'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>

                <Text style={style.titleInput}> SENHA </Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.Input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry // Adicione isso para esconder a senha
                    />
                    <MaterialIcons 
                        name='remove-red-eye'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin}>
                    {loading ? (
                        <ActivityIndicator color={'#ffff'} size={"small"} />
                    ) : (
                        <Text style={style.textButton}>Entrar</Text>
                    )}
                </TouchableOpacity>
            </View>
            <Text style={style.textBotton}>
                Não tem conta? Crie agora!
            </Text>
        </View>
    );
}
