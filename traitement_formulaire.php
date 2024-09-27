<?php
// Vérification du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Nettoyage des données entrantes
    function sanitize_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Variables pour stocker les données entrées
    $nom = sanitize_input($_POST["nom_prenom"]);
    $email = sanitize_input($_POST["email"]);
    $message = sanitize_input($_POST["message"]);

    // Vérification des données
    $errors = array();

    if (empty($nom)) {
        $errors[] = "Le nom est requis.";
    }

    if (empty($email)) {
        $errors[] = "L'email est requis.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Format d'email invalide.";
    }

    if (empty($message)) {
        $errors[] = "Le message est requis.";
    }

    // Si aucune erreur, envoyer l'email
    if (empty($errors)) {
        $to = "votre@email.com"; // Remplacer par votre adresse email
        $subject = "Nouveau message de $nom";
        $body = "Nom: $nom\nEmail: $email\nMessage:\n$message";

        if (mail($to, $subject, $body)) {
            echo "Votre message a été envoyé avec succès.";
        } else {
            echo "Désolé, une erreur s'est produite lors de l'envoi de votre message.";
        }
    } else {
        // Afficher les erreurs
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}
?>