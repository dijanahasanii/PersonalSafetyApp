import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import moment from "moment";

const StatusTab = () => {
    const [status, setStatus] = useState("ACTIVE");
    const [lastUpdate, setLastUpdate] = useState(moment().format("h:mm:ss A"));

    const toggleStatus = () => {
        const newStatus = status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
        setStatus(newStatus);
        setLastUpdate(moment().format("h:mm:ss A"));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>System Status Monitor</Text>
            <View style={styles.statusBox}>
                <Text style={[styles.status, status === "ACTIVE" ? styles.active : styles.inactive]}>
                    System Status: {status}
                </Text>
                <Text style={styles.updateText}>Last Update: {lastUpdate}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={toggleStatus}>
                <Text style={styles.buttonText}>Toggle Status</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#121212" },
    title: { fontSize: 20, fontWeight: "bold", color: "#fff", marginBottom: 20 },
    statusBox: { padding: 20, backgroundColor: "#1E1E1E", borderRadius: 10, alignItems: "center" },
    status: { fontSize: 18, fontWeight: "bold" },
    active: { color: "green" },
    inactive: { color: "red" },
    updateText: { color: "#ccc", marginTop: 10 },
    button: { marginTop: 20, backgroundColor: "#007BFF", padding: 10, borderRadius: 5 },
    buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});

export default StatusTab;
