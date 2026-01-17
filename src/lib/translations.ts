export type Language = 'ro' | 'en' | 'de' | 'fr' | 'pt' | 'el' | 'es' | 'hu';

export const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
];

export const translations: Record<string, Record<Language, string>> = {
    // Navigation
    'nav.home': { ro: 'Acasă', en: 'Home', de: 'Startseite', fr: 'Accueil', pt: 'Início', el: 'Αρχική', es: 'Inicio', hu: 'Kezdőlap' },
    'nav.organizare': { ro: 'Organizare', en: 'Organization', de: 'Organisation', fr: 'Organisation', pt: 'Organização', el: 'Οργάνωση', es: 'Organización', hu: 'Szervezés' },
    'nav.organizare.arbitri': { ro: 'Arbitri', en: 'Judges', de: 'Schiedsrichter', fr: 'Arbitres', pt: 'Juízes', el: 'Κριτές', es: 'Jueces', hu: 'Bírók' },
    'nav.organizare.uam': { ro: 'UAM', en: 'UAM', de: 'UAM', fr: 'UAM', pt: 'UAM', el: 'UAM', es: 'UAM', hu: 'UAM' },
    'nav.organizare.standuri': { ro: 'Standuri Comerciale', en: 'Commercial Stands', de: 'Handelsstände', fr: 'Stands Commerciaux', pt: 'Stands Comerciais', el: 'Εμπορικά Περίπτερα', es: 'Stands Comerciales', hu: 'Kereskedelmi Standok' },
    'nav.competitie': { ro: 'Competiție', en: 'Competition', de: 'Wettbewerb', fr: 'Compétition', pt: 'Competição', el: 'Διαγωνισμός', es: 'Competición', hu: 'Verseny' },
    'nav.competitie.program': { ro: 'Program', en: 'Schedule', de: 'Programm', fr: 'Programme', pt: 'Programa', el: 'Πρόγραμμα', es: 'Programa', hu: 'Program' },
    'nav.competitie.participanti': { ro: 'Participanți', en: 'Participants', de: 'Teilnehmende', fr: 'Participants', pt: 'Participantes', el: 'Συμμετέχοντες', es: 'Participantes', hu: 'Résztvevők' },
    'nav.competitie.inregistrare': { ro: 'Înregistrare', en: 'Registration', de: 'Anmeldung', fr: 'Inscription', pt: 'Inscrição', el: 'Εγγραφή', es: 'Inscripción', hu: 'Regisztráció' },
    'nav.informatii': { ro: 'Informații', en: 'Information', de: 'Informationen', fr: 'Informations', pt: 'Informações', el: 'Πληροφορίες', es: 'Información', hu: 'Információk' },
    'nav.informatii.stadion': { ro: 'Stadion', en: 'Stadium', de: 'Stadion', fr: 'Stade', pt: 'Estádio', el: 'Στάδιο', es: 'Estadio', hu: 'Stadion' },
    'nav.informatii.cumAjungi': { ro: 'Cum ajungi', en: 'How to Get Here', de: 'Anreise', fr: 'Comment venir', pt: 'Como chegar', el: 'Πώς να φτάσετε', es: 'Cómo llegar', hu: 'Megközelítés' },
    'nav.informatii.cazare': { ro: 'Cazare', en: 'Accommodation', de: 'Unterkunft', fr: 'Hébergement', pt: 'Alojamento', el: 'Διαμονή', es: 'Alojamiento', hu: 'Szállás' },
    'nav.superselectie': { ro: 'SuperSelecție', en: 'SuperSelection', de: 'SuperSelection', fr: 'SuperSélection', pt: 'SuperSeleção', el: 'SuperSelection', es: 'SuperSelección', hu: 'SzuperSzelekció' },
    'nav.superselectie.despre': { ro: 'Despre', en: 'About', de: 'Über', fr: 'À propos', pt: 'Sobre', el: 'Σχετικά', es: 'Sobre', hu: 'Rólunk' },
    'nav.superselectie.program': { ro: 'Program', en: 'Schedule', de: 'Programm', fr: 'Programme', pt: 'Programa', el: 'Πρόγραμμα', es: 'Programa', hu: 'Program' },
    'nav.superselectie.participanti': { ro: 'Participant', en: 'Participant', de: 'Teilnehmer', fr: 'Participant', pt: 'Participante', el: 'Συμμετέχων', es: 'Participante', hu: 'Résztvevő' },
    'nav.superselectie.rezultate': { ro: 'Rezultate', en: 'Results', de: 'Ergebnisse', fr: 'Résultats', pt: 'Resultados', el: 'Αποτελέσματα', es: 'Resultados', hu: 'Eredmények' },
    'nav.contact': { ro: 'Contact', en: 'Contact', de: 'Kontakt', fr: 'Contact', pt: 'Contato', el: 'Επικοινωνία', es: 'Contacto', hu: 'Kapcsolat' },

    // Footer
    'footer.copyright': {
        ro: '© 2026 Campionatul Mondial de Mondioring, Pecica Romania',
        en: '© 2026 Mondioring World Championship, Pecica Romania',
        de: '© 2026 Mondioring Weltmeisterschaft, Pecica Rumänien',
        fr: '© 2026 Championnat du Monde de Mondioring, Pecica Roumanie',
        pt: '© 2026 Campeonato Mundial de Mondioring, Pecica Romênia',
        el: '© 2026 Παγκόσμιο Πρωτάθλημα Mondioring, Pecica Ρουμανία',
        es: '© 2026 Campeonato Mundial de Mondioring, Pecica Rumanía',
        hu: '© 2026 Mondioring Világbajnokság, Pecica Románia'
    },
    'footer.powered': {
        ro: 'powered by WeCodeToU',
        en: 'powered by WeCodeToU',
        de: 'powered by WeCodeToU',
        fr: 'propulsé par WeCodeToU',
        pt: 'desenvolvido por WeCodeToU',
        el: 'με την υποστήριξη του WeCodeToU',
        es: 'impulsado por WeCodeToU',
        hu: 'készítette: WeCodeToU'
    },
    'footer.cookies': { ro: 'Politica Cookie-uri', en: 'Cookie Policy', de: 'Cookie-Richtlinie', fr: 'Politique de Cookies', pt: 'Política de Cookies', el: 'Πολιτική Cookies', es: 'Política de Cookies', hu: 'Süti Szabályzat' },

    // Home
    'home.welcome.heading': {
        ro: 'Bine ați venit pe pagina web a Campionatului Mondial FCI Mondioring 2026',
        en: 'Welcome to the FCI Mondioring World Championship 2026 website',
        de: 'Willkommen auf der Website der FCI Mondioring Weltmeisterschaft 2026',
        fr: 'Bienvenue sur le site web du Championnat du Monde FCI Mondioring 2026',
        pt: 'Bem-vindo ao site do Campeonato Mundial FCI Mondioring 2026',
        el: 'Καλώς ήρθατε στην ιστοσελίδα του Παγκοσμίου Πρωταθλήματος FCI Mondioring 2026',
        es: 'Bienvenido al sitio web del Campeonato Mundial FCI Mondioring 2026',
        hu: 'Üdvözöljük az FCI Mondioring Világbajnokság 2026 weboldalán'
    },
    'home.welcome.paragraph1': {
        ro: 'Este o onoare și totodată o plăcere pentru Romanian Kennel Club de a găzdui pentru a doua oară desfășurarea Campionatului Mondial FCI Mondioring în România.',
        en: 'It is an honor and a pleasure for the Romanian Kennel Club to host the FCI Mondioring World Championship in Romania for the second time.',
        de: 'Es ist eine Ehre und eine Freude für den Romanian Kennel Club, die FCI Mondioring Weltmeisterschaft zum zweiten Mal in Rumänien auszurichten.',
        fr: 'C\'est un honneur et un plaisir pour le Romanian Kennel Club d\'accueillir pour la deuxième fois le Championnat du Monde FCI Mondioring en Roumanie.',
        pt: 'É uma honra e um prazer para o Romanian Kennel Club sediar o Campeonato Mundial FCI Mondioring na Romênia pela segunda vez.',
        el: 'Είναι τιμή και χαρά για τον Ρουμανικό Κυνολογικό Όμιλο να φιλοξενεί για δεύτερη φορά το Παγκόσμιο Πρωτάθλημα FCI Mondioring στη Ρουμανία.',
        es: 'Es un honor y un placer para el Romanian Kennel Club acoger por segunda vez el Campeonato Mundial FCI Mondioring en Rumanía.',
        hu: 'Megtiszteltetés és öröm a Román Kennel Klub számára, hogy második alkalommal adhat otthont az FCI Mondioring Világbajnokságnak Romániában.'
    },
    'home.welcome.paragraph2': {
        ro: 'Având experiența Campionatului Mondial organizat în 2021, vă asigur că în 2026 vom depune eforturile necesare pentru a ne ridica la cel mai înalt nivel în organizarea acestui important eveniment cinologic.',
        en: 'Having the experience of the World Championship organized in 2021, I assure you that in 2026 we will make the necessary efforts to rise to the highest level in organizing this important cynological event.',
        de: 'Mit der Erfahrung der 2021 organisierten Weltmeisterschaft versichere ich Ihnen, dass wir 2026 die notwendigen Anstrengungen unternehmen werden, um die Organisation dieser wichtigen kynologischen Veranstaltung auf höchstem Niveau zu bringen.',
        fr: 'Ayant l\'expérience du Championnat du Monde organisé en 2021, je vous assure qu\'en 2026 nous ferons les efforts nécessaires pour élever au plus haut niveau l\'organisation de cet important événement cynologique.',
        pt: 'Tendo a experiência do Campeonato Mundial organizado em 2021, asseguro-lhes que em 2026 faremos os esforços necessários para elevar ao mais alto nível a organização deste importante evento cinológico.',
        el: 'Έχοντας την εμπειρία του Παγκοσμίου Πρωταθλήματος που διοργανώθηκε το 2021, σας διαβεβαιώνω ότι το 2026 θα καταβάλουμε τις απαραίτητες προσπάθειες για να ανέλθουμε στο υψηλότερο επίπεδο στη διοργάνωση αυτού του σημαντικού κυνολογικού γεγονότος.',
        es: 'Teniendo la experiencia del Campeonato Mundial organizado en 2021, les aseguro que en 2026 haremos los esfuerzos necesarios para elevar al más alto nivel la organización de este importante evento cinológico.',
        hu: 'A 2021-ben szervezett világbajnokság tapasztalataival rendelkezve biztosítom önöket, hogy 2026-ban minden szükséges erőfeszítést megteszünk annak érdekében, hogy a lehető legmagasabb színvonalon szervezzük meg ezt a fontos kinológiai eseményt.'
    },
    'home.welcome.paragraph3': {
        ro: 'Doresc să urez un călduros Bun venit și succes tuturor participanților!',
        en: 'I would like to wish a warm welcome and success to all participants!',
        de: 'Ich möchte allen Teilnehmern ein herzliches Willkommen und viel Erfolg wünschen!',
        fr: 'Je souhaite souhaiter la bienvenue et le succès à tous les participants !',
        pt: 'Gostaria de desejar as boas-vindas e sucesso a todos os participantes!',
        el: 'Θα ήθελα να ευχηθώ ένα θερμό καλωσόρισμα και καλή επιτυχία σε όλους τους συμμετέχοντες!',
        es: '¡Quisiera desear una cálida bienvenida y éxito a todos los participantes!',
        hu: 'Szeretnék meleg üdvözletet és sok sikert kívánni minden résztvevőnek!'
    },
    'home.sponsors.title': { ro: 'Sponsori', en: 'Sponsors', de: 'Sponsoren', fr: 'Sponsors', pt: 'Patrocinadores', el: 'Χορηγοί', es: 'Patrocinadores', hu: 'Szponzorok' },

    // Registration
    'registration.title': { ro: 'Înregistrare Team Leader', en: 'Team Leader Registration', de: 'Team Leader Anmeldung', fr: 'Inscription Team Leader', pt: 'Registro Team Leader', el: 'Εγγραφή Αρχηγού Ομάδας', es: 'Registro de Líder de Equipo', hu: 'Csapatvezető Regisztráció' },
    'registration.notice.label': { ro: 'Notă informativă:', en: 'Informative note:', de: 'Hinweis:', fr: 'Note informative :', pt: 'Nota informativa:', el: 'Ενημερωτικό σημείωμα:', es: 'Nota informativa:', hu: 'Tájékoztató megjegyzés:' },
    'registration.notice.text': {
        ro: 'Odată înregistrat team leader-ul țării, acesta va primi un email cu un link unde vă veți putea înscrie întreaga echipă. Vă rugăm acordați atenție deosebită datelor completate.',
        en: 'Once the country team leader is registered, they will receive an email with a link where you can register the entire team. Please pay special attention to the data filled in.',
        de: 'Sobald der Teamleiter des Landes registriert ist, erhält er eine E-Mail mit einem Link, wo Sie das gesamte Team anmelden können. Bitte achten Sie besonders auf die ausgefüllten Daten.',
        fr: 'Une fois le team leader du pays enregistré, il recevra un e-mail avec un lien où vous pourrez inscrire toute l\'équipe. Veuillez accorder une attention particulière aux données renseignées.',
        pt: 'Uma vez registrado o líder da equipe do país, ele receberá um e-mail com um link onde você poderá registrar toda a equipe. Por favor, preste atenção especial aos dados preenchidos.',
        el: 'Μόλις εγγραφεί ο αρχηγός της ομάδας της χώρας, θα λάβει ένα email με έναν σύνδεσμο όπου μπορείτε να εγγράψετε ολόκληρη την ομάδα. Παρακαλώ δώστε ιδιαίτερη προσοχή στα στοιχεία που συμπληρώνονται.',
        es: 'Una vez registrado el líder del equipo del país, recibirá un correo electrónico con un enlace donde podrá registrar a todo el equipo. Por favor, preste especial atención a los datos completados.',
        hu: 'Miután az ország csapatvezetője regisztrált, kap egy e-mailt egy linkkel, ahol regisztrálhatja az egész csapatot. Kérjük, fordítson különös figyelmet a kitöltött adatokra.'
    },
    'registration.form.nume': { ro: 'Nume *', en: 'Last Name *', de: 'Nachname *', fr: 'Nom *', pt: 'Sobrenome *', el: 'Επώνυμο *', es: 'Apellido *', hu: 'Vezetéknév *' },
    'registration.form.prenume': { ro: 'Prenume *', en: 'First Name *', de: 'Vorname *', fr: 'Prénom *', pt: 'Nome *', el: 'Όνομα *', es: 'Nombre *', hu: 'Keresztnév *' },
    'registration.form.email': { ro: 'Email *', en: 'Email *', de: 'E-Mail *', fr: 'Email *', pt: 'Email *', el: 'Email *', es: 'Email *', hu: 'Email *' },
    'registration.form.telefon': { ro: 'Telefon *', en: 'Phone *', de: 'Telefon *', fr: 'Téléphone *', pt: 'Telefone *', el: 'Τηλέφωνο *', es: 'Teléfono *', hu: 'Telefon *' },
    'registration.form.tara': { ro: 'Țară Reprezentată *', en: 'Represented Country *', de: 'Vertretenes Land *', fr: 'Pays Représenté *', pt: 'País Representado *', el: 'Εκπροσωπούμενη Χώρα *', es: 'País Representado *', hu: 'Képviselt Ország *' },
    'registration.form.submit': { ro: 'Trimite Înregistrarea', en: 'Submit Registration', de: 'Anmeldung Absenden', fr: 'Soumettre l\'Inscription', pt: 'Enviar Inscrição', el: 'Υποβολή Εγγραφής', es: 'Enviar Inscripción', hu: 'Regisztráció Elküldése' },
    'registration.success.title': { ro: '✓ Înregistrare Reușită!', en: '✓ Registration Successful!', de: '✓ Anmeldung Erfolgreich!', fr: '✓ Inscription Réussie !', pt: '✓ Inscrição Bem-sucedida!', el: '✓ Επιτυχής Εγγραφή!', es: '✓ ¡Inscripción Exitosa!', hu: '✓ Sikeres Regisztráció!' },
    'registration.success.message': { ro: 'Mulțumim', en: 'Thank you', de: 'Vielen Dank', fr: 'Merci', pt: 'Obrigado', el: 'Ευχαριστούμε', es: 'Gracias', hu: 'Köszönjük' },
    'registration.success.info': { ro: 'Veți primi în curând un email la adresa', en: 'You will soon receive an email at', de: 'Sie erhalten bald eine E-Mail an', fr: 'Vous recevrez bientôt un e-mail à l\'adresse', pt: 'Você receberá em breve um e-mail em', el: 'Σύντομα θα λάβετε ένα email στο', es: 'Pronto recibirá un correo electrónico en', hu: 'Hamarosan kap egy e-mailt a következő címre' },
    'registration.success.note': { ro: 'Notă: Vă rugăm să verificați folderul de spam dacă nu primiți email-ul în câteva minute.', en: 'Note: Please check your spam folder if you do not receive the email within a few minutes.', de: 'Hinweis: Bitte überprüfen Sie Ihren Spam-Ordner, wenn Sie die E-Mail nicht innerhalb weniger Minuten erhalten.', fr: 'Note : Veuillez vérifier votre dossier spam si vous ne recevez pas l\'e-mail dans quelques minutes.', pt: 'Nota: Por favor, verifique sua pasta de spam se não receber o e-mail em alguns minutos.', el: 'Σημείωση: Παρακαλώ ελέγξτε το φάκελο ανεπιθύμητων μηνυμάτων εάν δεν λάβετε το email μέσα σε λίγα λεπτά.', es: 'Nota: Por favor revise su carpeta de spam si no recibe el correo electrónico en unos minutos.', hu: 'Megjegyzés: Kérjük, ellenőrizze a spam mappát, ha néhány percen belül nem kapja meg az e-mailt.' },
    'registration.success.back': { ro: 'Înapoi la formular', en: 'Back to form', de: 'Zurück zum Formular', fr: 'Retour au formulaire', pt: 'Voltar ao formulário', el: 'Επιστροφή στη φόρμα', es: 'Volver al formulario', hu: 'Vissza az űrlaphoz' },

    // Contact
    'contact.info.title': { ro: 'Informații de Contact', en: 'Contact Information', de: 'Kontaktinformationen', fr: 'Informations de Contact', pt: 'Informações de Contato', el: 'Πληροφορίες Επικοινωνίας', es: 'Información de Contacto', hu: 'Elérhetőségek' },
    'contact.info.location.title': { ro: 'Locația Evenimentului', en: 'Event Location', de: 'Veranstaltungsort', fr: 'Lieu de l\'événement', pt: 'Local do Evento', el: 'Τοποθεσία Εκδήλωσης', es: 'Ubicación del Evento', hu: 'Esemény Helyszíne' },
    'contact.info.location.text': {
        ro: 'Jucu Arena<br>Orașul Pecica, Județul Arad<br>România',
        en: 'Jucu Arena<br>Pecica City, Arad County<br>Romania',
        de: 'Jucu Arena<br>Stadt Pecica, Kreis Arad<br>Rumänien',
        fr: 'Jucu Arena<br>Ville de Pecica, Comté d\'Arad<br>Roumanie',
        pt: 'Jucu Arena<br>Cidade de Pecica, Condado de Arad<br>Romênia',
        el: 'Jucu Arena<br>Πόλη Pecica, Κομητεία Arad<br>Ρουμανία',
        es: 'Jucu Arena<br>Ciudad de Pecica, Condado de Arad<br>Rumanía',
        hu: 'Jucu Aréna<br>Pécska Város, Arad Megye<br>Románia'
    },
    'contact.info.phone.title': { ro: 'Telefon', en: 'Phone', de: 'Telefon', fr: 'Téléphone', pt: 'Telefone', el: 'Τηλέφωνο', es: 'Teléfono', hu: 'Telefon' },
    'contact.info.email.title': { ro: 'Email', en: 'Email', de: 'E-Mail', fr: 'Email', pt: 'Email', el: 'Email', es: 'Email', hu: 'Email' },
    'contact.info.schedule.title': { ro: 'Program', en: 'Schedule', de: 'Öffnungszeiten', fr: 'Horaires', pt: 'Horário', el: 'Ωράριο', es: 'Horario', hu: 'Nyitvatartás' },
    'contact.info.schedule.text': {
        ro: 'Luni - Vineri: 09:00 - 18:00<br>Sâmbătă - Duminică: 10:00 - 16:00',
        en: 'Monday - Friday: 09:00 - 18:00<br>Saturday - Sunday: 10:00 - 16:00',
        de: 'Montag - Freitag: 09:00 - 18:00<br>Samstag - Sonntag: 10:00 - 16:00',
        fr: 'Lundi - Vendredi: 09:00 - 18:00<br>Samedi - Dimanche: 10:00 - 16:00',
        pt: 'Segunda - Sexta: 09:00 - 18:00<br>Sábado - Domingo: 10:00 - 16:00',
        el: 'Δευτέρα - Παρασκευή: 09:00 - 18:00<br>Σάββατο - Κυριακή: 10:00 - 16:00',
        es: 'Lunes - Viernes: 09:00 - 18:00<br>Sábado - Domingo: 10:00 - 16:00',
        hu: 'Hétfő - Péntek: 09:00 - 18:00<br>Szombat - Vasárnap: 10:00 - 16:00'
    },
    'contact.form.title': { ro: 'Trimite-ne un mesaj', en: 'Send us a message', de: 'Senden Sie uns eine Nachricht', fr: 'Envoyez-nous un message', pt: 'Envie-nos uma mensagem', el: 'Στείλτε μας ένα μήνυμα', es: 'Envíanos un mensaje', hu: 'Küldjön üzenetet' },
    'contact.form.nume': { ro: 'Nume', en: 'Last Name', de: 'Nachname', fr: 'Nom', pt: 'Sobrenome', el: 'Επώνυμο', es: 'Apellido', hu: 'Vezetéknév' },
    'contact.form.prenume': { ro: 'Prenume', en: 'First Name', de: 'Vorname', fr: 'Prénom', pt: 'Nome', el: 'Όνομα', es: 'Nombre', hu: 'Keresztnév' },
    'contact.form.email': { ro: 'Email', en: 'Email', de: 'E-Mail', fr: 'Email', pt: 'Email', el: 'Email', es: 'Email', hu: 'Email' },
    'contact.form.mesaj': { ro: 'Mesaj', en: 'Message', de: 'Nachricht', fr: 'Message', pt: 'Mensagem', el: 'Μήνυμα', es: 'Mensaje', hu: 'Üzenet' },
    'contact.form.submit': { ro: 'Trimite mesajul', en: 'Send message', de: 'Nachricht senden', fr: 'Envoyer le message', pt: 'Enviar mensagem', el: 'Αποστολή μηνύματος', es: 'Enviar mensaje', hu: 'Üzenet küldése' },

    // Organizare - Arbitri
    'organizare.arbitri.card1.photo': { ro: 'Foto Arbitru 1', en: 'Judge Photo 1', de: 'Schiedsrichter Foto 1', fr: 'Photo Arbitre 1', pt: 'Foto Juiz 1', el: 'Φωτογραφία Κριτή 1', es: 'Foto Juez 1', hu: 'Bíró Fotó 1' },
    'organizare.arbitri.card1.name': { ro: 'Nume Arbitru 1', en: 'Judge Name 1', de: 'Schiedsrichter Name 1', fr: 'Nom Arbitre 1', pt: 'Nome Juiz 1', el: 'Όνομα Κριτή 1', es: 'Nombre Juez 1', hu: 'Bíró Név 1' },
    'organizare.arbitri.card1.bio': {
        ro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        de: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        pt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        el: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        hu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    // ... Repeat for 2-6 (using simpler generic fallback for now to save space, but ideally distinct)
    'organizare.arbitri.card2.photo': { ro: 'Foto Arbitru 2', en: 'Judge Photo 2', de: 'Schiedsrichter Foto 2', fr: 'Photo Arbitre 2', pt: 'Foto Juiz 2', el: 'Φωτογραφία Κριτή 2', es: 'Foto Juez 2', hu: 'Bíró Fotó 2' },
    'organizare.arbitri.card2.name': { ro: 'Nume Arbitru 2', en: 'Judge Name 2', de: 'Schiedsrichter Name 2', fr: 'Nom Arbitre 2', pt: 'Nome Juiz 2', el: 'Όνομα Κριτή 2', es: 'Nombre Juez 2', hu: 'Bíró Név 2' },
    'organizare.arbitri.card2.bio': { ro: 'Duis aute irure dolor in reprehenderit.', en: 'Duis aute irure dolor in reprehenderit.', de: 'Duis aute irure dolor in reprehenderit.', fr: 'Duis aute irure dolor in reprehenderit.', pt: 'Duis aute irure dolor in reprehenderit.', el: 'Duis aute irure dolor in reprehenderit.', es: 'Duis aute irure dolor in reprehenderit.', hu: 'Duis aute irure dolor in reprehenderit.' },
    'organizare.arbitri.card3.photo': { ro: 'Foto Arbitru 3', en: 'Judge Photo 3', de: 'Schiedsrichter Foto 3', fr: 'Photo Arbitre 3', pt: 'Foto Juiz 3', el: 'Φωτογραφία Κριτή 3', es: 'Foto Juez 3', hu: 'Bíró Fotó 3' },
    'organizare.arbitri.card3.name': { ro: 'Nume Arbitru 3', en: 'Judge Name 3', de: 'Schiedsrichter Name 3', fr: 'Nom Arbitre 3', pt: 'Nome Juiz 3', el: 'Όνομα Κριτή 3', es: 'Nombre Juez 3', hu: 'Bíró Név 3' },
    'organizare.arbitri.card3.bio': { ro: 'Sed ut perspiciatis unde omnis iste.', en: 'Sed ut perspiciatis unde omnis iste.', de: 'Sed ut perspiciatis unde omnis iste.', fr: 'Sed ut perspiciatis unde omnis iste.', pt: 'Sed ut perspiciatis unde omnis iste.', el: 'Sed ut perspiciatis unde omnis iste.', es: 'Sed ut perspiciatis unde omnis iste.', hu: 'Sed ut perspiciatis unde omnis iste.' },
    'organizare.arbitri.card4.photo': { ro: 'Foto Arbitru 4', en: 'Judge Photo 4', de: 'Schiedsrichter Foto 4', fr: 'Photo Arbitre 4', pt: 'Foto Juiz 4', el: 'Φωτογραφία Κριτή 4', es: 'Foto Juez 4', hu: 'Bíró Fotó 4' },
    'organizare.arbitri.card4.name': { ro: 'Nume Arbitru 4', en: 'Judge Name 4', de: 'Schiedsrichter Name 4', fr: 'Nom Arbitre 4', pt: 'Nome Juiz 4', el: 'Όνομα Κριτή 4', es: 'Nombre Juez 4', hu: 'Bíró Név 4' },
    'organizare.arbitri.card4.bio': { ro: 'Nemo enim ipsam voluptatem quia.', en: 'Nemo enim ipsam voluptatem quia.', de: 'Nemo enim ipsam voluptatem quia.', fr: 'Nemo enim ipsam voluptatem quia.', pt: 'Nemo enim ipsam voluptatem quia.', el: 'Nemo enim ipsam voluptatem quia.', es: 'Nemo enim ipsam voluptatem quia.', hu: 'Nemo enim ipsam voluptatem quia.' },
    'organizare.arbitri.card5.photo': { ro: 'Foto Arbitru 5', en: 'Judge Photo 5', de: 'Schiedsrichter Foto 5', fr: 'Photo Arbitre 5', pt: 'Foto Juiz 5', el: 'Φωτογραφία Κριτή 5', es: 'Foto Juez 5', hu: 'Bíró Fotó 5' },
    'organizare.arbitri.card5.name': { ro: 'Nume Arbitru 5', en: 'Judge Name 5', de: 'Schiedsrichter Name 5', fr: 'Nom Arbitre 5', pt: 'Nome Juiz 5', el: 'Όνομα Κριτή 5', es: 'Nombre Juez 5', hu: 'Bíró Név 5' },
    'organizare.arbitri.card5.bio': { ro: 'Consectetur adipiscing elit.', en: 'Consectetur adipiscing elit.', de: 'Consectetur adipiscing elit.', fr: 'Consectetur adipiscing elit.', pt: 'Consectetur adipiscing elit.', el: 'Consectetur adipiscing elit.', es: 'Consectetur adipiscing elit.', hu: 'Consectetur adipiscing elit.' },
    'organizare.arbitri.card6.photo': { ro: 'Foto Arbitru 6', en: 'Judge Photo 6', de: 'Schiedsrichter Foto 6', fr: 'Photo Arbitre 6', pt: 'Foto Juiz 6', el: 'Φωτογραφία Κριτή 6', es: 'Foto Juez 6', hu: 'Bíró Fotó 6' },
    'organizare.arbitri.card6.name': { ro: 'Nume Arbitru 6', en: 'Judge Name 6', de: 'Schiedsrichter Name 6', fr: 'Nom Arbitre 6', pt: 'Nome Juiz 6', el: 'Όνομα Κριτή 6', es: 'Nombre Juez 6', hu: 'Bíró Név 6' },
    'organizare.arbitri.card6.bio': { ro: 'Excepteur sint occaecat cupidatat.', en: 'Excepteur sint occaecat cupidatat.', de: 'Excepteur sint occaecat cupidatat.', fr: 'Excepteur sint occaecat cupidatat.', pt: 'Excepteur sint occaecat cupidatat.', el: 'Excepteur sint occaecat cupidatat.', es: 'Excepteur sint occaecat cupidatat.', hu: 'Excepteur sint occaecat cupidatat.' },

    // Informatii - Stadion
    'info.stadium.legend': { ro: 'Legendă stadion', en: 'Stadium Legend', de: 'Stadionlegende', fr: 'Légende du stade', pt: 'Legenda do estádio', el: 'Υπόμνημα σταδίου', es: 'Leyenda del estadio', hu: 'Stadion jelmagyarázat' },
    'info.stadium.item1': { ro: 'Teren Mondioring', en: 'Mondioring Field', de: 'Mondioring-Feld', fr: 'Terrain de Mondioring', pt: 'Campo de Mondioring', el: 'Γήπεδο Mondioring', es: 'Campo de Mondioring', hu: 'Mondioring Pálya' },
    'info.stadium.item2': { ro: 'Gala Party', en: 'Gala Party', de: 'Gala-Party', fr: 'Soirée de Gala', pt: 'Festa de Gala', el: 'Gala Party', es: 'Fiesta de Gala', hu: 'Gála Party' },
    'info.stadium.item3': { ro: 'Teren Super Selecție', en: 'Super Selection Field', de: 'Super Selection Feld', fr: 'Terrain Super Sélection', pt: 'Campo Super Seleção', el: 'Γήπεδο Super Selection', es: 'Campo Super Selección', hu: 'Szuper Szelekció Pálya' },
    'info.stadium.item4': { ro: 'Parcare participanți', en: 'Participants Parking', de: 'Teilnehmerparkplatz', fr: 'Parking participants', pt: 'Estacionamento participantes', el: 'Χώρος στάθμευσης συμμετεχόντων', es: 'Aparcamiento participantes', hu: 'Résztvevői parkoló' },

    // Informatii - Cum Ajungi
    'info.directions.location': { ro: 'Locația evenimentului', en: 'Event Location', de: 'Veranstaltungsort', fr: 'Lieu de l\'événement', pt: 'Local do evento', el: 'Τοποθεσία εκδήλωσης', es: 'Ubicación del evento', hu: 'Esemény helyszíne' },
    'info.directions.address': { ro: 'Adresă', en: 'Address', de: 'Adresse', fr: 'Adresse', pt: 'Endereço', el: 'Διεύθυνση', es: 'Dirección', hu: 'Cím' },
    'info.directions.instructions': { ro: 'Indicații', en: 'Directions', de: 'Wegbeschreibung', fr: 'Itinéraire', pt: 'Instruções', el: 'Οδηγίες', es: 'Indicaciones', hu: 'Útvonal' },
    'info.directions.instructions.text': {
        ro: 'Pentru a ajunge la Stadionul Progresul Pecica...',
        en: 'To get to Progresul Pecica Stadium...',
        de: 'Um zum Progresul Pecica Stadion zu gelangen...',
        fr: 'Pour se rendre au stade Progresul Pecica...',
        pt: 'Para chegar ao Estádio Progresul Pecica...',
        el: 'Για να φτάσετε στο στάδιο Progresul Pecica...',
        es: 'Para llegar al Estadio Progresul Pecica...',
        hu: 'A Progresul Pecica Stadionhoz való eljutáshoz...'
    },

    // Global
    'common.soon': { ro: 'Conținutul pentru această pagină va fi disponibil în curând.', en: 'Content for this page will be available soon.', de: 'Der Inhalt dieser Seite wird bald verfügbar sein.', fr: 'Le contenu de cette page sera bientôt disponible.', pt: 'O conteúdo desta página estará disponível em breve.', el: 'Το περιεχόμενο αυτής της σελίδας θα είναι διαθέσιμο σύντομα.', es: 'El contenido de esta página estará disponible pronto.', hu: 'Az oldal tartalma hamarosan elérhető lesz.' },
    'common.cookie.policy': {
        ro: 'Acest site folosește cookie-uri pentru a îmbunătăți experiența utilizatorilor.',
        en: 'This website uses cookies to improve user experience.',
        de: 'Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern.',
        fr: 'Ce site web utilise des cookies pour améliorer l\'expérience utilisateur.',
        pt: 'Este site usa cookies para melhorar a experiência do usuário.',
        el: 'Αυτός ο ιστότοπος χρησιμοποιεί cookies για τη βελτίωση της εμπειρίας χρήστη.',
        es: 'Este sitio web utiliza cookies para mejorar la experiencia del usuario.',
        hu: 'Ez a weboldal sütiket használ a felhasználói élmény javítása érdekében.'
    }
};
