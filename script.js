// ====== Configuration ======
const DEFAULT_LANG = 'pt';
// Set your specialist WhatsApp number here in international format (no spaces/dashes):
// Example Brazil: "55DDDNNNNNNN" (or with leading + for display, but link requires digits only)
const SPECIALIST_NUMBER = '5519997568433'; // TODO: Thomas, me diz qual número usar que eu coloco aqui.

// ====== Translation dictionary ======
const I18N = {
  pt: {
    title_home: 'Novembro Azul - Conscientização e Prevenção',
    title_about: 'Sobre - Novembro Azul',
    title_prev: 'Prevenção - Novembro Azul',
    brand: 'Novembro Azul',
    nav_home: 'Início',
    nav_about: 'Sobre',
    nav_prevention: 'Prevenção',
    hero_title: 'Novembro <span class="blue">Azul</span>',
    hero_desc: 'Um movimento mundial dedicado à conscientização sobre a saúde do homem e a prevenção do câncer de próstata. Cuidar de si mesmo é um ato de coragem.',
    btn_learn_more: 'Saiba Mais',
    btn_know_campaign: 'Conheça a Campanha',
    stat_1_value: '1 em 9',
    stat_1_label: 'Homens desenvolvem câncer de próstata',
    stat_2_value: '95%',
    stat_2_label: 'Taxa de sobrevivência com diagnóstico precoce',
    stat_3_value: '50+',
    stat_3_label: 'Idade recomendada para começar a se prevenir',
    features_title: 'Por que Novembro Azul é Importante?',
    feature_prev_title: 'Prevenção',
    feature_prev_desc: 'Conhecer os fatores de risco e adotar hábitos saudáveis é essencial para prevenir o câncer de próstata.',
    feature_dx_title: 'Diagnóstico Precoce',
    feature_dx_desc: 'Detectar a doença nos estágios iniciais aumenta significativamente as chances de cura e tratamento.',
    feature_awareness_title: 'Conscientização',
    feature_awareness_desc: 'Promover o diálogo sobre saúde masculina e quebrar tabus é fundamental para salvar vidas.',
    feature_qol_title: 'Qualidade de Vida',
    feature_qol_desc: 'Cuidar da saúde integral do homem melhora a qualidade de vida em todos os aspectos.',
    cta_title: 'Cuide-se. Previna-se. Viva Melhor.',
    cta_desc: 'Não espere sintomas aparecerem. Consulte um médico regularmente e conheça os fatores de risco que podem afetar sua saúde.',
    cta_btn: 'Dicas de Prevenção',
    footer_brand: 'Novembro Azul',
    footer_desc: 'Conscientização sobre a saúde do homem e prevenção do câncer de próstata.',
    footer_nav: 'Navegação',
    footer_resources: 'Recursos',
    footer_bottom: 'Conscientização sobre Saúde Masculina. Todos os direitos reservados.',

    about_hero_title: 'O que é Novembro Azul?',
    about_hero_desc: 'Uma campanha global de conscientização sobre a saúde do homem e a importância da prevenção do câncer de próstata.',
    about_history_title: 'História e Origem',
    about_history_p1: 'O Novembro Azul é um movimento mundial que surgiu na Austrália em 2003 como uma forma de conscientizar sobre a saúde masculina. A campanha ganhou força ao longo dos anos e se expandiu para diversos países, incluindo o Brasil, onde chegou em 2011.',
    about_history_p2: 'A cor azul foi escolhida como símbolo da campanha, e o mês de novembro foi dedicado especialmente à conscientização sobre o câncer de próstata, a doença mais comum entre homens (exceto o câncer de pele).',
    about_objectives_title: 'Objetivos da Campanha',
    obj_awareness_title: 'Conscientização',
    obj_awareness_desc: 'Informar homens sobre a importância da prevenção e diagnóstico precoce do câncer de próstata.',
    obj_dialog_title: 'Diálogo Aberto',
    obj_dialog_desc: 'Quebrar tabus e promover conversas sobre saúde masculina entre amigos, família e profissionais.',
    obj_global_title: 'Mobilização Global',
    obj_global_desc: 'Unir pessoas em todo o mundo em torno de uma causa comum: a saúde e o bem-estar do homem.',
    obj_qol_title: 'Qualidade de Vida',
    obj_qol_desc: 'Promover hábitos saudáveis e cuidados integrais com a saúde física e mental.',
    about_why_title: 'Por que é Importante?',
    about_why_1_title: 'Prevalência da Doença',
    about_why_1_desc: 'O câncer de próstata é o segundo tipo de câncer mais comum em homens no Brasil. Aproximadamente 1 em cada 9 homens desenvolverá câncer de próstata durante a vida.',
    about_why_2_title: 'Diagnóstico Precoce Salva Vidas',
    about_why_2_desc: 'Quando detectado nos estágios iniciais, a taxa de sobrevivência em 5 anos é de aproximadamente 95%. O diagnóstico precoce é fundamental para o sucesso do tratamento.',
    about_why_3_title: 'Saúde Integral do Homem',
    about_why_3_desc: 'A campanha vai além do câncer de próstata, abordando a saúde integral masculina, incluindo aspectos físicos, mentais e emocionais.',
    about_why_4_title: 'Quebra de Tabus',
    about_why_4_desc: 'Muitos homens evitam falar sobre saúde ou procurar ajuda médica. A campanha ajuda a normalizar essas conversas e encorajar o autocuidado.',
    about_stats_title: 'Dados Importantes',
    about_stats_1_value: '65.000+',
    about_stats_1_desc: 'Novos casos de câncer de próstata diagnosticados anualmente no Brasil',
    about_stats_2_value: '15.000+',
    about_stats_2_desc: 'Mortes por câncer de próstata por ano no Brasil',
    about_stats_3_value: '50+',
    about_stats_3_desc: 'Idade recomendada para iniciar avaliação de risco com médico',
    about_stats_4_value: '95%',
    about_stats_4_desc: 'Taxa de sobrevivência em 5 anos com diagnóstico precoce',
    about_cta_title: 'Você Pode Fazer a Diferença',
    about_cta_desc: 'Compartilhe essa mensagem com amigos e familiares. A conscientização é o primeiro passo para salvar vidas.',
    btn_back_home: 'Voltar ao Início',

    prev_hero_title: 'Prevenção do Câncer de Próstata',
    prev_hero_desc: 'Conheça os fatores de risco, as medidas preventivas e a importância dos exames regulares.',
    risk_title: 'Fatores de Risco',
    risk_intro: 'Conhecer os fatores de risco é fundamental para a prevenção. Alguns fatores podem ser controlados, enquanto outros não.',
    risk_unctrl_title: '❌ Fatores Não Controláveis',
    risk_ctrl_title: '✓ Fatores Controláveis',
    risk_age_label: 'Idade:',
    risk_age_desc: 'Risco aumenta após os 50 anos',
    risk_family_label: 'Histórico Familiar:',
    risk_family_desc: 'Se pai ou irmão tiveram câncer',
    risk_ethnicity_label: 'Etnia:',
    risk_ethnicity_desc: 'Homens negros têm maior risco',
    risk_genetics_label: 'Genética:',
    risk_genetics_desc: 'Mutações genéticas hereditárias',
    risk_diet_label: 'Alimentação:',
    risk_diet_desc: 'Dieta rica em gordura aumenta risco',
    risk_weight_label: 'Peso:',
    risk_weight_desc: 'Obesidade está associada ao câncer',
    risk_smoke_label: 'Tabagismo:',
    risk_smoke_desc: 'Fumar aumenta o risco',
    risk_alcohol_label: 'Álcool:',
    risk_alcohol_desc: 'Consumo excessivo é prejudicial',

    tips_title: 'Dicas de Prevenção',
    tips_intro: 'Adotar hábitos saudáveis é a melhor forma de prevenir o câncer de próstata.',
    tip_diet_title: 'Alimentação Saudável',
    tip_diet_desc: 'Uma dieta equilibrada é essencial para a prevenção:',
    tip_diet_1: 'Aumente o consumo de frutas, vegetais e grãos integrais',
    tip_diet_2: 'Reduza o consumo de carne vermelha e processada',
    tip_diet_3: 'Limite alimentos gordurosos e frituras',
    tip_diet_4: 'Inclua alimentos ricos em licopeno (tomate, melancia)',
    tip_diet_5: 'Consuma alimentos com selênio (castanha-do-pará, atum)',

    tip_activity_title: 'Atividade Física Regular',
    tip_activity_desc: 'O exercício regular reduz o risco de câncer:',
    tip_activity_1: 'Pratique pelo menos 150 minutos de atividade moderada por semana',
    tip_activity_2: 'Inclua exercícios de resistência 2 vezes por semana',
    tip_activity_3: 'Escolha atividades que você goste (caminhada, natação, ciclismo)',
    tip_activity_4: 'Mantenha um peso corporal saudável',
    tip_activity_5: 'Evite o sedentarismo',

    tip_avoid_title: 'Evite Hábitos Prejudiciais',
    tip_avoid_desc: 'Alguns hábitos aumentam significativamente o risco:',
    tip_avoid_1: 'Não fume e evite fumo passivo',
    tip_avoid_2: 'Limite o consumo de bebidas alcoólicas',
    tip_avoid_3: 'Evite alimentos ultraprocessados',
    tip_avoid_4: 'Reduza o estresse através de técnicas de relaxamento',
    tip_avoid_5: 'Durma bem (7-9 horas por noite)',

    tip_exams_title: 'Exames Regulares',
    tip_exams_desc: 'O diagnóstico precoce é fundamental:',
    tip_exams_1: 'Homens com 50 anos: consulte um urologista para avaliar risco',
    tip_exams_2: 'Homens com histórico familiar: comece aos 40 anos',
    tip_exams_3: 'Homens negros: comece aos 40 anos (maior risco)',
    tip_exams_4: 'Exames: PSA (sangue) e toque retal',
    tip_exams_5: 'Frequência: anual ou conforme orientação médica',

    wa_send_title: 'Receber dicas pelo WhatsApp',
    wa_send_desc: 'Informe seu número com código do país (ex: +55DDDNUM) e envie as dicas.',
    wa_send_btn: 'Enviar dicas para meu WhatsApp',
    wa_privacy_note: 'Usamos apenas o link oficial do WhatsApp para abrir a conversa no seu aparelho.',

    wa_contact_title: 'Falar com especialista via WhatsApp',
    wa_contact_desc: 'Mensagem pré-pronta com suas dicas e espaço para escrever livremente.',
    wa_contact_btn: 'Enviar mensagem ao especialista',
    wa_contact_note: 'Configure o número do especialista em scripts.js.',

    doctor_title: 'Quando Procurar um Médico?',
    doctor_intro: 'Procure um urologista se você apresentar algum destes sintomas:',
    symptom_1: '🚽 Dificuldade em urinar ou fluxo fraco',
    symptom_2: '🌙 Necessidade frequente de urinar, especialmente à noite',
    symptom_3: '🔥 Dor ou queimação ao urinar',
    symptom_4: '🩸 Sangue na urina ou no sêmen',
    symptom_5: '💙 Dor nas costas, quadril ou pelve',
    symptom_6: '⚡ Disfunção erétil',
    doctor_note: '<strong>Lembre-se:</strong> esses sintomas podem ter outras causas, mas é importante consultar um médico para avaliação.',

    prev_cta_title: 'Cuide-se Hoje, Viva Melhor Amanhã',
    prev_cta_desc: 'A prevenção é o melhor caminho. Consulte um médico regularmente e adote hábitos saudáveis.',
    btn_about_novembro: 'Saiba Mais Sobre Novembro Azul'
  },

  // ---- English ----
  en: {
    title_home: 'Blue November - Awareness and Prevention',
    title_about: 'About - Blue November',
    title_prev: 'Prevention - Blue November',
    brand: 'Blue November',
    nav_home: 'Home',
    nav_about: 'About',
    nav_prevention: 'Prevention',
    hero_title: 'Blue <span class="blue">November</span>',
    hero_desc: 'A global movement dedicated to men’s health awareness and prostate cancer prevention. Taking care of yourself is an act of courage.',
    btn_learn_more: 'Learn More',
    btn_know_campaign: 'Know the Campaign',
    stat_1_value: '1 in 9',
    stat_1_label: 'Men develop prostate cancer',
    stat_2_value: '95%',
    stat_2_label: 'Survival rate with early diagnosis',
    stat_3_value: '50+',
    stat_3_label: 'Recommended age to start prevention',
    features_title: 'Why Blue November Matters',
    feature_prev_title: 'Prevention',
    feature_prev_desc: 'Knowing risk factors and adopting healthy habits is essential to prevent prostate cancer.',
    feature_dx_title: 'Early Diagnosis',
    feature_dx_desc: 'Detecting the disease in early stages significantly increases chances of cure and treatment.',
    feature_awareness_title: 'Awareness',
    feature_awareness_desc: 'Promoting dialogue and breaking taboos around men’s health saves lives.',
    feature_qol_title: 'Quality of Life',
    feature_qol_desc: 'Caring for overall men’s health improves quality of life across the board.',
    cta_title: 'Take Care. Prevent. Live Better.',
    cta_desc: 'Don’t wait for symptoms. See a doctor regularly and know the risk factors.',
    cta_btn: 'Prevention Tips',
    footer_brand: 'Blue November',
    footer_desc: 'Awareness about men’s health and prostate cancer prevention.',
    footer_nav: 'Navigation',
    footer_resources: 'Resources',
    footer_bottom: 'Men’s Health Awareness. All rights reserved.',

    about_hero_title: 'What is Blue November?',
    about_hero_desc: 'A global campaign on men’s health and the importance of prostate cancer prevention.',
    about_history_title: 'History and Origin',
    about_history_p1: 'Blue November began in Australia in 2003 to raise men’s health awareness and expanded globally, reaching Brazil in 2011.',
    about_history_p2: 'Blue symbolizes the campaign, and November is dedicated to prostate cancer awareness, the most common male cancer excluding skin.',
    about_objectives_title: 'Campaign Objectives',
    obj_awareness_title: 'Awareness',
    obj_awareness_desc: 'Inform men about prevention and early diagnosis of prostate cancer.',
    obj_dialog_title: 'Open Dialogue',
    obj_dialog_desc: 'Break taboos and promote conversations among friends, family, and professionals.',
    obj_global_title: 'Global Mobilization',
    obj_global_desc: 'Unite people worldwide around men’s health and wellbeing.',
    obj_qol_title: 'Quality of Life',
    obj_qol_desc: 'Promote healthy habits and comprehensive physical and mental care.',
    about_why_title: 'Why It Matters',
    about_why_1_title: 'Disease Prevalence',
    about_why_1_desc: 'Prostate cancer is the second most common cancer among men in Brazil. About 1 in 9 men will develop it.',
    about_why_2_title: 'Early Diagnosis Saves Lives',
    about_why_2_desc: 'When detected early, 5-year survival is approximately 95%. Early diagnosis is key.',
    about_why_3_title: 'Holistic Men’s Health',
    about_why_3_desc: 'The campaign goes beyond prostate cancer to address holistic men’s health.',
    about_why_4_title: 'Breaking Taboos',
    about_why_4_desc: 'Many men avoid discussing health or seeking care. The campaign normalizes these conversations.',
    about_stats_title: 'Key Data',
    about_stats_1_value: '65,000+',
    about_stats_1_desc: 'New cases per year in Brazil',
    about_stats_2_value: '15,000+',
    about_stats_2_desc: 'Deaths per year in Brazil',
    about_stats_3_value: '50+',
    about_stats_3_desc: 'Recommended age to assess risk',
    about_stats_4_value: '95%',
    about_stats_4_desc: '5-year survival with early diagnosis',
    about_cta_title: 'You Can Make a Difference',
    about_cta_desc: 'Share this with friends and family. Awareness is the first step.',
    btn_back_home: 'Back to Home',

    prev_hero_title: 'Prostate Cancer Prevention',
    prev_hero_desc: 'Know risk factors, prevention measures, and the importance of regular exams.',
    risk_title: 'Risk Factors',
    risk_intro: 'Knowing risk factors is key. Some can be controlled, others cannot.',
    risk_unctrl_title: '❌ Uncontrollable Factors',
    risk_ctrl_title: '✓ Controllable Factors',
    risk_age_label: 'Age:',
    risk_age_desc: 'Risk increases after age 50',
    risk_family_label: 'Family History:',
    risk_family_desc: 'Father or brother with cancer',
    risk_ethnicity_label: 'Ethnicity:',
    risk_ethnicity_desc: 'Black men have higher risk',
    risk_genetics_label: 'Genetics:',
    risk_genetics_desc: 'Hereditary gene mutations',
    risk_diet_label: 'Diet:',
    risk_diet_desc: 'High-fat diet increases risk',
    risk_weight_label: 'Weight:',
    risk_weight_desc: 'Obesity is associated with cancer',
    risk_smoke_label: 'Smoking:',
    risk_smoke_desc: 'Smoking increases risk',
    risk_alcohol_label: 'Alcohol:',
    risk_alcohol_desc: 'Excessive use is harmful',

    tips_title: 'Prevention Tips',
    tips_intro: 'Healthy habits are the best way to prevent prostate cancer.',
    tip_diet_title: 'Healthy Diet',
    tip_diet_desc: 'A balanced diet is essential:',
    tip_diet_1: 'Increase fruits, vegetables, and whole grains',
    tip_diet_2: 'Reduce red and processed meat',
    tip_diet_3: 'Limit fatty and fried foods',
    tip_diet_4: 'Include lycopene-rich foods (tomato, watermelon)',
    tip_diet_5: 'Consume selenium sources (Brazil nuts, tuna)',

    tip_activity_title: 'Regular Physical Activity',
    tip_activity_desc: 'Regular exercise reduces cancer risk:',
    tip_activity_1: 'At least 150 minutes of moderate activity per week',
    tip_activity_2: 'Add resistance training twice weekly',
    tip_activity_3: 'Choose activities you enjoy (walking, swimming, cycling)',
    tip_activity_4: 'Maintain a healthy body weight',
    tip_activity_5: 'Avoid sedentary behavior',

    tip_avoid_title: 'Avoid Harmful Habits',
    tip_avoid_desc: 'Some habits significantly increase risk:',
    tip_avoid_1: 'Do not smoke; avoid secondhand smoke',
    tip_avoid_2: 'Limit alcohol consumption',
    tip_avoid_3: 'Avoid ultra-processed foods',
    tip_avoid_4: 'Reduce stress with relaxation techniques',
    tip_avoid_5: 'Sleep well (7–9 hours per night)',

    tip_exams_title: 'Regular Exams',
    tip_exams_desc: 'Early diagnosis is essential:',
    tip_exams_1: 'Men at 50: see a urologist to assess risk',
    tip_exams_2: 'Family history: start at 40',
    tip_exams_3: 'Black men: start at 40 (higher risk)',
    tip_exams_4: 'Exams: PSA (blood) and digital rectal exam',
    tip_exams_5: 'Frequency: annually or per medical advice',

    wa_send_title: 'Receive tips via WhatsApp',
    wa_send_desc: 'Enter your number with country code (e.g., +55DDDNUM) and send tips.',
    wa_send_btn: 'Send tips to my WhatsApp',
    wa_privacy_note: 'We only use the official WhatsApp link to open the chat on your device.',

    wa_contact_title: 'Talk to a specialist via WhatsApp',
    wa_contact_desc: 'Pre-filled message with tips and space to write freely.',
    wa_contact_btn: 'Send message to specialist',
    wa_contact_note: 'Set the specialist number in scripts.js.',

    doctor_title: 'When to See a Doctor?',
    doctor_intro: 'See a urologist if you experience any of these symptoms:',
    symptom_1: '🚽 Difficulty urinating or weak flow',
    symptom_2: '🌙 Frequent urination, especially at night',
    symptom_3: '🔥 Pain or burning when urinating',
    symptom_4: '🩸 Blood in urine or semen',
    symptom_5: '💙 Back, hip, or pelvic pain',
    symptom_6: '⚡ Erectile dysfunction',
    doctor_note: '<strong>Remember:</strong> these symptoms may have other causes, but consult a doctor for evaluation.',

    prev_cta_title: 'Take Care Today, Live Better Tomorrow',
    prev_cta_desc: 'Prevention is the best path. See a doctor regularly and adopt healthy habits.',
    btn_about_novembro: 'Learn More About Blue November',
    btn_back_home: 'Back to Home'
  },

  // ---- Arabic ----
  ar: {
    title_home: 'نوفمبر الأزرق - التوعية والوقاية',
    title_about: 'نبذة - نوفمبر الأزرق',
    title_prev: 'الوقاية - نوفمبر الأزرق',
    brand: 'نوفمبر الأزرق',
    nav_home: 'الرئيسية',
    nav_about: 'نبذة',
    nav_prevention: 'الوقاية',
    hero_title: 'نوفمبر <span class="blue">الأزرق</span>',
    hero_desc: 'حركة عالمية مكرسة للتوعية بصحة الرجل والوقاية من سرطان البروستاتا. الاهتمام بنفسك عمل شجاع.',
    btn_learn_more: 'اعرف المزيد',
    btn_know_campaign: 'تعرف على الحملة',
    stat_1_value: '1 من 9',
    stat_1_label: 'يصاب الرجال بسرطان البروستاتا',
    stat_2_value: '95٪',
    stat_2_label: 'نسبة البقاء مع التشخيص المبكر',
    stat_3_value: '50+',
    stat_3_label: 'العمر الموصى به لبدء الوقاية',
    features_title: 'لماذا نوفمبر الأزرق مهم',
    feature_prev_title: 'الوقاية',
    feature_prev_desc: 'معرفة عوامل الخطر واعتماد عادات صحية أمر أساسي للوقاية من سرطان البروستاتا.',
    feature_dx_title: 'التشخيص المبكر',
    feature_dx_desc: 'الكشف المبكر يزيد بشكل كبير فرص الشفاء والعلاج.',
    feature_awareness_title: 'التوعية',
    feature_awareness_desc: 'تعزيز الحوار وكسر التابوهات حول صحة الرجل ينقذ الأرواح.',
    feature_qol_title: 'جودة الحياة',
    feature_qol_desc: 'الاهتمام بالصحة الشاملة للرجل يحسن جودة الحياة.',
    cta_title: 'اعتن بنفسك. قِ الوقاية. عش أفضل.',
    cta_desc: 'لا تنتظر ظهور الأعراض. راجع الطبيب بانتظام وتعرف على عوامل الخطر.',
    cta_btn: 'نصائح الوقاية',
    footer_brand: 'نوفمبر الأزرق',
    footer_desc: 'التوعية بصحة الرجل والوقاية من سرطان البروستاتا.',
    footer_nav: 'التنقل',
    footer_resources: 'الموارد',
    footer_bottom: 'التوعية بصحة الرجل. جميع الحقوق محفوظة.',

    about_hero_title: 'ما هو نوفمبر الأزرق؟',
    about_hero_desc: 'حملة عالمية حول صحة الرجل وأهمية الوقاية من سرطان البروستاتا.',
    about_history_title: 'التاريخ والنشأة',
    about_history_p1: 'بدأ نوفمبر الأزرق في أستراليا عام 2003 للتوعية بصحة الرجل وتوسع عالميًا ووصل إلى البرازيل عام 2011.',
    about_history_p2: 'الأزرق هو رمز الحملة، ونوفمبر مخصص للتوعية بسرطان البروستاتا، الأكثر شيوعًا لدى الرجال باستثناء الجلد.',
    about_objectives_title: 'أهداف الحملة',
    obj_awareness_title: 'التوعية',
    obj_awareness_desc: 'إعلام الرجال بأهمية الوقاية والتشخيص المبكر.',
    obj_dialog_title: 'حوار مفتوح',
    obj_dialog_desc: 'كسر التابوهات وتشجيع المحادثات بين الأصدقاء والعائلة والمتخصصين.',
    obj_global_title: 'تعبئة عالمية',
    obj_global_desc: 'توحيد الناس حول العالم لصحة ورفاهية الرجل.',
    obj_qol_title: 'جودة الحياة',
    obj_qol_desc: 'تعزيز العادات الصحية والرعاية الشاملة الجسدية والنفسية.',
    about_why_title: 'لماذا الأمر مهم',
    about_why_1_title: 'انتشار المرض',
    about_why_1_desc: 'سرطان البروستاتا ثاني أكثر السرطانات شيوعًا بين الرجال في البرازيل. يصاب به نحو 1 من كل 9 رجال.',
    about_why_2_title: 'التشخيص المبكر ينقذ الأرواح',
    about_why_2_desc: 'عند الكشف المبكر، البقاء لخمس سنوات يقارب 95٪. التشخيص المبكر أساسي.',
    about_why_3_title: 'صحة الرجل الشاملة',
    about_why_3_desc: 'تتجاوز الحملة سرطان البروستاتا لتشمل الصحة الشاملة للرجل.',
    about_why_4_title: 'كسر التابوهات',
    about_why_4_desc: 'يتجنب كثير من الرجال الحديث عن الصحة أو طلب المساعدة. الحملة تطبع هذه المحادثات.',
    about_stats_title: 'بيانات مهمة',
    about_stats_1_value: '65,000+',
    about_stats_1_desc: 'حالات جديدة سنويًا في البرازيل',
    about_stats_2_value: '15,000+',
    about_stats_2_desc: 'وفيات سنويًا في البرازيل',
    about_stats_3_value: '50+',
    about_stats_3_desc: 'العمر الموصى به لتقييم المخاطر',
    about_stats_4_value: '95٪',
    about_stats_4_desc: 'البقاء لخمس سنوات مع التشخيص المبكر',
    about_cta_title: 'يمكنك أن تُحدث فرقًا',
    about_cta_desc: 'شارك الرسالة مع الأصدقاء والعائلة. الوعي هو الخطوة الأولى.',
    btn_back_home: 'العودة إلى الرئيسية',

    prev_hero_title: 'الوقاية من سرطان البروستاتا',
    prev_hero_desc: 'تعرف على عوامل الخطر والتدابير الوقائية وأهمية الفحوصات المنتظمة.',
    risk_title: 'عوامل الخطر',
    risk_intro: 'معرفة عوامل الخطر أمر أساسي. بعضها يمكن التحكم فيه والبعض لا.',
    risk_unctrl_title: '❌ عوامل غير قابلة للتحكم',
    risk_ctrl_title: '✓ عوامل قابلة للتحكم',
    risk_age_label: 'العمر:',
    risk_age_desc: 'يزداد الخطر بعد سن 50',
    risk_family_label: 'تاريخ عائلي:',
    risk_family_desc: 'الأب أو الأخ مصاب بالسرطان',
    risk_ethnicity_label: 'العرق:',
    risk_ethnicity_desc: 'الرجال السود أكثر عرضة',
    risk_genetics_label: 'الوراثة:',
    risk_genetics_desc: 'طفرات جينية وراثية',
    risk_diet_label: 'النظام الغذائي:',
    risk_diet_desc: 'النظام عالي الدهون يزيد الخطر',
    risk_weight_label: 'الوزن:',
    risk_weight_desc: 'السمنة مرتبطة بالسرطان',
    risk_smoke_label: 'التدخين:',
    risk_smoke_desc: 'التدخين يزيد الخطر',
    risk_alcohol_label: 'الكحول:',
    risk_alcohol_desc: 'الإفراط مضر',

    tips_title: 'نصائح الوقاية',
    tips_intro: 'العادات الصحية أفضل وسيلة للوقاية.',
    tip_diet_title: 'نظام صحي',
    tip_diet_desc: 'حمية متوازنة ضرورية:',
    tip_diet_1: 'زد تناول الفواكه والخضروات والحبوب الكاملة',
    tip_diet_2: 'قلل اللحوم الحمراء والمُعالَجة',
    tip_diet_3: 'حد من الأطعمة الدهنية والمقلية',
    tip_diet_4: 'أدخل أطعمة غنية بالليكوبين (الطماطم والبطيخ)',
    tip_diet_5: 'تناول مصادر السيلينيوم (جوز برازيلي والتونة)',

    tip_activity_title: 'نشاط بدني منتظم',
    tip_activity_desc: 'الرياضة المنتظمة تقلل خطر السرطان:',
    tip_activity_1: 'على الأقل 150 دقيقة نشاط معتدل أسبوعيًا',
    tip_activity_2: 'أضف تمارين مقاومة مرتين أسبوعيًا',
    tip_activity_3: 'اختر أنشطة محببة (المشي، السباحة، ركوب الدراجات)',
    tip_activity_4: 'حافظ على وزن صحي',
    tip_activity_5: 'تجنب الخمول',

    tip_avoid_title: 'تجنب العادات الضارة',
    tip_avoid_desc: 'بعض العادات تزيد الخطر بشكل كبير:',
    tip_avoid_1: 'لا تدخن وتجنب الدخان السلبي',
    tip_avoid_2: 'حد من استهلاك الكحول',
    tip_avoid_3: 'تجنب الأطعمة فائقة المعالجة',
    tip_avoid_4: 'قلل التوتر بتقنيات الاسترخاء',
    tip_avoid_5: 'نم جيدًا (7–9 ساعات)',

    tip_exams_title: 'فحوصات منتظمة',
    tip_exams_desc: 'التشخيص المبكر ضروري:',
    tip_exams_1: 'الرجال بعمر 50: راجع طبيب المسالك لتقييم المخاطر',
    tip_exams_2: 'تاريخ عائلي: ابدأ عند 40',
    tip_exams_3: 'الرجال السود: ابدأ عند 40 (خطر أعلى)',
    tip_exams_4: 'فحوصات: PSA (دم) والفحص الشرجي',
    tip_exams_5: 'التكرار: سنويًا أو حسب الطبيب',

    wa_send_title: 'استقبل النصائح عبر واتساب',
    wa_send_desc: 'أدخل رقمك مع مفتاح الدولة (مثل +55) وأرسل النصائح.',
    wa_send_btn: 'أرسل النصائح إلى واتسابي',
    wa_privacy_note: 'نستخدم رابط واتساب الرسمي لفتح المحادثة على جهازك.',

    wa_contact_title: 'تحدث مع متخصص عبر واتساب',
    wa_contact_desc: 'رسالة جاهزة مع النصائح ومساحة للكتابة بحرية.',
    wa_contact_btn: 'أرسل رسالة للمتخصص',
    wa_contact_note: 'اضبط رقم المتخصص في scripts.js.',

    doctor_title: 'متى تراجع الطبيب؟',
    doctor_intro: 'راجع طبيب المسالك إذا ظهرت أي من الأعراض:',
    symptom_1: '🚽 صعوبة التبول أو ضعف التدفق',
    symptom_2: '🌙 كثرة التبول خصوصًا ليلًا',
    symptom_3: '🔥 ألم أو حرقة أثناء التبول',
    symptom_4: '🩸 دم في البول أو المني',
    symptom_5: '💙 ألم أسفل الظهر أو الورك أو الحوض',
    symptom_6: '⚡ ضعف الانتصاب',
    doctor_note: '<strong>تذكير:</strong> قد تكون لهذه الأعراض أسباب أخرى، لكن راجع الطبيب للتقييم.',

    prev_cta_title: 'اعتن اليوم، وعِش أفضل غدًا',
    prev_cta_desc: 'الوقاية هي الطريق الأفضل. راجع الطبيب بانتظام واتبع عادات صحية.',
    btn_about_novembro: 'اعرف المزيد عن نوفمبر الأزرق',
    btn_back_home: 'العودة إلى الرئيسية'
  },

  // ---- French ----
  fr: {
    title_home: 'Novembre Bleu - Sensibilisation et Prévention',
    title_about: 'À propos - Novembre Bleu',
    title_prev: 'Prévention - Novembre Bleu',
    brand: 'Novembre Bleu',
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_prevention: 'Prévention',
    hero_title: 'Novembre <span class="blue">Bleu</span>',
    hero_desc: 'Un mouvement mondial dédié à la santé des hommes et à la prévention du cancer de la prostate. Prendre soin de soi est un acte de courage.',
    btn_learn_more: 'En savoir plus',
    btn_know_campaign: 'Découvrir la campagne',
    stat_1_value: '1 sur 9',
    stat_1_label: 'Les hommes développent un cancer de la prostate',
    stat_2_value: '95%',
    stat_2_label: 'Taux de survie avec un diagnostic précoce',
    stat_3_value: '50+',
    stat_3_label: 'Âge recommandé pour commencer la prévention',
    features_title: 'Pourquoi Novembre Bleu est important',
    feature_prev_title: 'Prévention',
    feature_prev_desc: 'Connaître les facteurs de risque et adopter des habitudes saines est essentiel pour prévenir le cancer de la prostate.',
    feature_dx_title: 'Diagnostic précoce',
    feature_dx_desc: 'Détecter la maladie tôt augmente les chances de guérison.',
    feature_awareness_title: 'Sensibilisation',
    feature_awareness_desc: 'Promouvoir le dialogue et briser les tabous autour de la santé masculine sauve des vies.',
    feature_qol_title: 'Qualité de vie',
    feature_qol_desc: 'Prendre soin de la santé globale des hommes améliore la qualité de vie.',
    cta_title: 'Prenez soin de vous. Prévenez. Vivez mieux.',
    cta_desc: 'N’attendez pas les symptômes. Consultez régulièrement et connaissez les facteurs de risque.',
    cta_btn: 'Conseils de prévention',
    footer_brand: 'Novembre Bleu',
    footer_desc: 'Sensibilisation à la santé masculine et prévention du cancer de la prostate.',
    footer_nav: 'Navigation',
    footer_resources: 'Ressources',
    footer_bottom: 'Sensibilisation à la santé masculine. Tous droits réservés.',

    about_hero_title: 'Qu’est-ce que Novembre Bleu ?',
    about_hero_desc: 'Une campagne mondiale sur la santé des hommes et l’importance de la prévention du cancer de la prostate.',
    about_history_title: 'Histoire et origine',
    about_history_p1: 'Novembre Bleu a commencé en Australie en 2003 et s’est étendu dans le monde, atteignant le Brésil en 2011.',
    about_history_p2: 'Le bleu est le symbole de la campagne, et novembre est dédié à la sensibilisation au cancer de la prostate.',
    about_objectives_title: 'Objectifs de la campagne',
    obj_awareness_title: 'Sensibilisation',
    obj_awareness_desc: 'Informer les hommes sur la prévention et le diagnostic précoce.',
    obj_dialog_title: 'Dialogue ouvert',
    obj_dialog_desc: 'Briser les tabous et promouvoir les conversations.',
    obj_global_title: 'Mobilisation mondiale',
    obj_global_desc: 'Unir les personnes autour de la santé et du bien-être des hommes.',
    obj_qol_title: 'Qualité de vie',
    obj_qol_desc: 'Promouvoir des habitudes saines et des soins complets.',
    about_why_title: 'Pourquoi c’est important',
    about_why_1_title: 'Prévalence de la maladie',
    about_why_1_desc: 'Le cancer de la prostate est le 2e cancer masculin le plus courant au Brésil. Environ 1 homme sur 9 le développera.',
    about_why_2_title: 'Le diagnostic précoce sauve des vies',
    about_why_2_desc: 'Détecté tôt, la survie à 5 ans est d’environ 95%.',
    about_why_3_title: 'Santé globale des hommes',
    about_why_3_desc: 'La campagne va au-delà du cancer de la prostate.',
    about_why_4_title: 'Briser les tabous',
    about_why_4_desc: 'Beaucoup d’hommes évitent d’en parler ou de consulter. Cette campagne normalise ces échanges.',
    about_stats_title: 'Données clés',
    about_stats_1_value: '65 000+',
    about_stats_1_desc: 'Nouveaux cas par an au Brésil',
    about_stats_2_value: '15 000+',
    about_stats_2_desc: 'Décès par an au Brésil',
    about_stats_3_value: '50+',
    about_stats_3_desc: 'Âge recommandé pour évaluer le risque',
    about_stats_4_value: '95%',
    about_stats_4_desc: 'Survie à 5 ans avec diagnostic précoce',
    about_cta_title: 'Vous pouvez faire la différence',
    about_cta_desc: 'Partagez ce message. La sensibilisation est la première étape.',
    btn_back_home: 'Retour à l’accueil',

    prev_hero_title: 'Prévention du cancer de la prostate',
    prev_hero_desc: 'Connaître les risques, les mesures de prévention et l’importance des examens.',
    risk_title: 'Facteurs de risque',
    risk_intro: 'Les connaître est essentiel. Certains sont contrôlables, d’autres non.',
    risk_unctrl_title: '❌ Facteurs non contrôlables',
    risk_ctrl_title: '✓ Facteurs contrôlables',
    risk_age_label: 'Âge :',
    risk_age_desc: 'Le risque augmente après 50 ans',
    risk_family_label: 'Antécédents familiaux :',
    risk_family_desc: 'Père ou frère atteint de cancer',
    risk_ethnicity_label: 'Ethnicité :',
    risk_ethnicity_desc: 'Les hommes noirs ont un risque plus élevé',
    risk_genetics_label: 'Génétique :',
    risk_genetics_desc: 'Mutations génétiques héréditaires',
    risk_diet_label: 'Alimentation :',
    risk_diet_desc: 'Un régime riche en graisses augmente le risque',
    risk_weight_label: 'Poids :',
    risk_weight_desc: 'L’obésité est associée au cancer',
    risk_smoke_label: 'Tabagisme :',
    risk_smoke_desc: 'Fumer augmente le risque',
    risk_alcohol_label: 'Alcool :',
    risk_alcohol_desc: 'La consommation excessive est nocive',

    tips_title: 'Conseils de prévention',
    tips_intro: 'Les habitudes saines sont la meilleure voie.',
    tip_diet_title: 'Alimentation saine',
    tip_diet_desc: 'Une alimentation équilibrée est essentielle :',
    tip_diet_1: 'Augmentez fruits, légumes et céréales complètes',
    tip_diet_2: 'Réduisez viandes rouges et transformées',
    tip_diet_3: 'Limitez les aliments gras et frits',
    tip_diet_4: 'Incluez des aliments riches en lycopène (tomate, pastèque)',
    tip_diet_5: 'Consommez du sélénium (noix du Brésil, thon)',

    tip_activity_title: 'Activité physique régulière',
    tip_activity_desc: 'L’exercice régulier réduit le risque :',
    tip_activity_1: 'Au moins 150 minutes/semaine d’activité modérée',
    tip_activity_2: 'Ajoutez 2 séances de musculation/semaine',
    tip_activity_3: 'Choisissez des activités appréciées (marche, natation, vélo)',
    tip_activity_4: 'Maintenez un poids sain',
    tip_activity_5: 'Évitez la sédentarité',

    tip_avoid_title: 'Éviter les habitudes nocives',
    tip_avoid_desc: 'Certaines augmentent fortement le risque :',
    tip_avoid_1: 'Ne fumez pas, évitez la fumée secondaire',
    tip_avoid_2: 'Limitez l’alcool',
    tip_avoid_3: 'Évitez les ultra-transformés',
    tip_avoid_4: 'Réduisez le stress par la relaxation',
    tip_avoid_5: 'Dormez bien (7–9 h)',

    tip_exams_title: 'Examens réguliers',
    tip_exams_desc: 'Le diagnostic précoce est essentiel :',
    tip_exams_1: 'À 50 ans : consultez un urologue',
    tip_exams_2: 'Antécédents familiaux : commencez à 40 ans',
    tip_exams_3: 'Hommes noirs : commencez à 40 ans (risque plus élevé)',
    tip_exams_4: 'PSA (sanguin) et toucher rectal',
    tip_exams_5: 'Fréquence : annuelle ou selon avis médical',

    wa_send_title: 'Recevoir des conseils via WhatsApp',
    wa_send_desc: 'Saisissez votre numéro avec l’indicatif (+55...) et envoyez les conseils.',
    wa_send_btn: 'Envoyer les conseils à mon WhatsApp',
    wa_privacy_note: 'Nous utilisons uniquement le lien officiel WhatsApp.',

    wa_contact_title: 'Parler à un spécialiste via WhatsApp',
    wa_contact_desc: 'Message pré-rempli avec conseils et espace libre.',
    wa_contact_btn: 'Envoyer au spécialiste',
    wa_contact_note: 'Définissez le numéro dans scripts.js.',

    doctor_title: 'Quand consulter un médecin ?',
    doctor_intro: 'Consultez un urologue si vous avez ces symptômes :',
    symptom_1: '🚽 Difficulté à uriner ou jet faible',
    symptom_2: '🌙 Mictions fréquentes, surtout la nuit',
    symptom_3: '🔥 Douleur ou brûlure à la miction',
    symptom_4: '🩸 Sang dans l’urine ou le sperme',
    symptom_5: '💙 Douleurs dos, hanches ou pelvis',
    symptom_6: '⚡ Dysfonction érectile',
    doctor_note: '<strong>Rappel :</strong> ces symptômes peuvent avoir d’autres causes ; consultez un médecin.',

    prev_cta_title: 'Prenez soin de vous aujourd’hui, vivez mieux demain',
    prev_cta_desc: 'La prévention est la meilleure voie.',
    btn_about_novembro: 'En savoir plus sur Novembre Bleu',
    btn_back_home: 'Retour à l’accueil'
  },

  // ---- Chinese ----
  zh: {
    title_home: '蓝色十一月 - 宣传与预防',
    title_about: '关于 - 蓝色十一月',
    title_prev: '预防 - 蓝色十一月',
    brand: '蓝色十一月',
    nav_home: '首页',
    nav_about: '关于',
    nav_prevention: '预防',
    hero_title: '蓝色 <span class="blue">十一月</span>',
    hero_desc: '致力于男性健康宣传和前列腺癌预防的全球运动。照顾自己是一种勇气。',
    btn_learn_more: '了解更多',
    btn_know_campaign: '认识活动',
    stat_1_value: '9人中1人',
    stat_1_label: '男性患前列腺癌',
    stat_2_value: '95%',
    stat_2_label: '早诊生存率',
    stat_3_value: '50+',
    stat_3_label: '建议开始预防的年龄',
    features_title: '为什么蓝色十一月重要',
    feature_prev_title: '预防',
    feature_prev_desc: '了解风险因素并养成健康习惯是预防前列腺癌的关键。',
    feature_dx_title: '早期诊断',
    feature_dx_desc: '早期发现显著提高治愈与治疗机会。',
    feature_awareness_title: '宣传',
    feature_awareness_desc: '促进对男性健康的对话与破除禁忌可挽救生命。',
    feature_qol_title: '生活质量',
    feature_qol_desc: '关注男性整体健康可提升生活质量。',
    cta_title: '照顾自己。预防。更好生活。',
    cta_desc: '别等症状出现。定期就医并了解风险因素。',
    cta_btn: '预防建议',
    footer_brand: '蓝色十一月',
    footer_desc: '男性健康宣传与前列腺癌预防。',
    footer_nav: '导航',
    footer_resources: '资源',
    footer_bottom: '男性健康宣传。版权所有。',

    about_hero_title: '什么是蓝色十一月？',
    about_hero_desc: '关于男性健康及前列腺癌预防的重要性之全球活动。',
    about_history_title: '历史与起源',
    about_history_p1: '蓝色十一月始于2003年的澳大利亚，后传播全球，2011年传至巴西。',
    about_history_p2: '蓝色为活动象征，十一月专注前列腺癌宣传。',
    about_objectives_title: '活动目标',
    obj_awareness_title: '宣传',
    obj_awareness_desc: '告知男性预防与早期诊断的重要性。',
    obj_dialog_title: '开放对话',
    obj_dialog_desc: '打破禁忌，促进交流。',
    obj_global_title: '全球动员',
    obj_global_desc: '团结各地人民关注男性健康。',
    obj_qol_title: '生活质量',
    obj_qol_desc: '促进健康习惯与全面身心照护。',
    about_why_title: '为何重要',
    about_why_1_title: '疾病流行',
    about_why_1_desc: '前列腺癌是巴西男性第二常见癌症；约9人中1人患病。',
    about_why_2_title: '早诊拯救生命',
    about_why_2_desc: '早期发现，5年生存率约95%。',
    about_why_3_title: '男性整体健康',
    about_why_3_desc: '活动不限于前列腺癌，关注整体健康。',
    about_why_4_title: '打破禁忌',
    about_why_4_desc: '许多男性避免谈论健康或就诊，活动可使交流常态化。',
    about_stats_title: '重要数据',
    about_stats_1_value: '65,000+',
    about_stats_1_desc: '巴西每年新增病例',
    about_stats_2_value: '15,000+',
    about_stats_2_desc: '巴西每年死亡人数',
    about_stats_3_value: '50+',
    about_stats_3_desc: '建议评估风险的年龄',
    about_stats_4_value: '95%',
    about_stats_4_desc: '早诊5年生存率',
    about_cta_title: '你可以带来改变',
    about_cta_desc: '与亲友分享此信息。宣传是第一步。',
    btn_back_home: '返回首页',

    prev_hero_title: '前列腺癌预防',
    prev_hero_desc: '了解风险因素、预防措施与定期检查的重要性。',
    risk_title: '风险因素',
    risk_intro: '了解风险至关重要：有些可控，有些不可控。',
    risk_unctrl_title: '❌ 不可控因素',
    risk_ctrl_title: '✓ 可控因素',
    risk_age_label: '年龄：',
    risk_age_desc: '50岁后风险增加',
    risk_family_label: '家族史：',
    risk_family_desc: '父亲或兄弟患癌',
    risk_ethnicity_label: '族裔：',
    risk_ethnicity_desc: '黑人男性风险更高',
    risk_genetics_label: '遗传：',
    risk_genetics_desc: '遗传性基因突变',
    risk_diet_label: '饮食：',
    risk_diet_desc: '高脂饮食增加风险',
    risk_weight_label: '体重：',
    risk_weight_desc: '肥胖与癌症相关',
    risk_smoke_label: '吸烟：',
    risk_smoke_desc: '吸烟增加风险',
    risk_alcohol_label: '酒精：',
    risk_alcohol_desc: '过量有害',

    tips_title: '预防建议',
    tips_intro: '健康习惯是最佳预防方式。',
    tip_diet_title: '健康饮食',
    tip_diet_desc: '均衡饮食至关重要：',
    tip_diet_1: '增加水果、蔬菜与全谷物',
    tip_diet_2: '减少红肉与加工肉',
    tip_diet_3: '限制高脂与油炸食品',
    tip_diet_4: '摄入富含番茄红素的食物（番茄、西瓜）',
    tip_diet_5: '摄入硒来源（巴西坚果、金枪鱼）',

    tip_activity_title: '规律运动',
    tip_activity_desc: '规律运动可降低风险：',
    tip_activity_1: '每周至少150分钟中等强度',
    tip_activity_2: '每周两次力量训练',
    tip_activity_3: '选择喜欢的活动（步行、游泳、骑行）',
    tip_activity_4: '保持健康体重',
    tip_activity_5: '避免久坐',

    tip_avoid_title: '避免不良习惯',
    tip_avoid_desc: '某些习惯显著增加风险：',
    tip_avoid_1: '不吸烟，避免二手烟',
    tip_avoid_2: '限制酒精摄入',
    tip_avoid_3: '避免超加工食品',
    tip_avoid_4: '通过放松技巧减压',
    tip_avoid_5: '睡眠充足（每晚7–9小时）',

    tip_exams_title: '定期检查',
    tip_exams_desc: '早诊至关重要：',
    tip_exams_1: '50岁：请泌尿科评估风险',
    tip_exams_2: '家族史：40岁开始',
    tip_exams_3: '黑人男性：40岁开始（更高风险）',
    tip_exams_4: '检查：PSA（血）和直肠指检',
    tip_exams_5: '频率：每年或遵医嘱',

    wa_send_title: '通过 WhatsApp 接收建议',
    wa_send_desc: '输入带国家区号的号码（如 +55）并发送建议。',
    wa_send_btn: '发送到我的 WhatsApp',
    wa_privacy_note: '仅使用官方 WhatsApp 链接在你的设备上打开对话。',

    wa_contact_title: '通过 WhatsApp 咨询专家',
    wa_contact_desc: '预填建议并可自由书写。',
    wa_contact_btn: '发送给专家',
    wa_contact_note: '在 scripts.js 设置专家号码。',

    doctor_title: '何时就医？',
    doctor_intro: '如出现以下症状请就诊泌尿科：',
    symptom_1: '🚽 排尿困难或尿流弱',
    symptom_2: '🌙 夜间频尿',
    symptom_3: '🔥 排尿疼痛或灼烧感',
    symptom_4: '🩸 尿液或精液带血',
    symptom_5: '💙 背部、髋部或骨盆疼痛',
    symptom_6: '⚡ 勃起功能障碍',
    doctor_note: '<strong>提醒：</strong>症状或有其他原因，但应就医评估。',

    prev_cta_title: '今日关爱，明日更好',
    prev_cta_desc: '预防是最佳途径。定期就医并养成健康习惯。',
    btn_about_novembro: '了解蓝色十一月',
    btn_back_home: '返回首页'
  },

  // ---- Russian ----
  ru: {
    title_home: 'Голубой Ноябрь — информирование и профилактика',
    title_about: 'О кампании — Голубой Ноябрь',
    title_prev: 'Профилактика — Голубой Ноябрь',
    brand: 'Голубой Ноябрь',
    nav_home: 'Главная',
    nav_about: 'О кампании',
    nav_prevention: 'Профилактика',
    hero_title: 'Голубой <span class="blue">Ноябрь</span>',
    hero_desc: 'Мировое движение, посвящённое здоровью мужчин и профилактике рака простаты. Забота о себе — это смело.',
    btn_learn_more: 'Узнать больше',
    btn_know_campaign: 'О кампании',
    stat_1_value: '1 из 9',
    stat_1_label: 'Мужчины заболевают раком простаты',
    stat_2_value: '95%',
    stat_2_label: 'Выживаемость при ранней диагностике',
    stat_3_value: '50+',
    stat_3_label: 'Рекомендуемый возраст для начала профилактики',
    features_title: 'Почему важен Голубой Ноябрь',
    feature_prev_title: 'Профилактика',
    feature_prev_desc: 'Знание факторов риска и здоровые привычки помогают предотвращать рак простаты.',
    feature_dx_title: 'Ранняя диагностика',
    feature_dx_desc: 'Раннее выявление значительно повышает шансы на излечение.',
    feature_awareness_title: 'Информирование',
    feature_awareness_desc: 'Диалог и разрушение табу вокруг мужского здоровья спасают жизни.',
    feature_qol_title: 'Качество жизни',
    feature_qol_desc: 'Забота о здоровье мужчин улучшает качество жизни.',
    cta_title: 'Заботьтесь. Профилактируйте. Живите лучше.',
    cta_desc: 'Не ждите симптомов. Регулярно посещайте врача и знайте факторы риска.',
    cta_btn: 'Советы по профилактике',
    footer_brand: 'Голубой Ноябрь',
    footer_desc: 'Информирование о здоровье мужчин и профилактике рака простаты.',
    footer_nav: 'Навигация',
    footer_resources: 'Ресурсы',
    footer_bottom: 'Информирование о здоровье мужчин. Все права защищены.',

    about_hero_title: 'Что такое Голубой Ноябрь?',
    about_hero_desc: 'Глобальная кампания о здоровье мужчин и профилактике рака простаты.',
    about_history_title: 'История и происхождение',
    about_history_p1: 'Начался в Австралии в 2003 году и распространился по миру, достигнув Бразилии в 2011.',
    about_history_p2: 'Символ — голубой, а ноябрь посвящён информированию о раке простаты.',
    about_objectives_title: 'Цели кампании',
    obj_awareness_title: 'Информирование',
    obj_awareness_desc: 'Рассказывать мужчинам о профилактике и ранней диагностике.',
    obj_dialog_title: 'Открытый диалог',
    obj_dialog_desc: 'Ломать табу и продвигать разговоры о здоровье.',
    obj_global_title: 'Глобальная мобилизация',
    obj_global_desc: 'Объединять людей ради здоровья и благополучия мужчин.',
    obj_qol_title: 'Качество жизни',
    obj_qol_desc: 'Продвигать здоровые привычки и комплексную заботу о теле и психике.',
    about_why_title: 'Почему это важно',
    about_why_1_title: 'Распространённость',
    about_why_1_desc: 'Рак простаты — второй по распространённости рак у мужчин в Бразилии. Около 1 из 9 заболеет.',
    about_why_2_title: 'Ранняя диагностика спасает жизни',
    about_why_2_desc: 'При раннем выявлении 5-летняя выживаемость около 95%.',
    about_why_3_title: 'Комплексное здоровье мужчин',
    about_why_3_desc: 'Кампания выходит за рамки рака простаты, говоря о здоровье в целом.',
    about_why_4_title: 'Снятие табу',
    about_why_4_desc: 'Многие мужчины избегают говорить о здоровье или идти к врачу. Кампания нормализует это.',
    about_stats_title: 'Важные данные',
    about_stats_1_value: '65 000+',
    about_stats_1_desc: 'Новых случаев в год в Бразилии',
    about_stats_2_value: '15 000+',
    about_stats_2_desc: 'Смертей в год в Бразилии',
    about_stats_3_value: '50+',
    about_stats_3_desc: 'Возраст для оценки риска',
    about_stats_4_value: '95%',
    about_stats_4_desc: '5-летняя выживаемость при ранней диагностике',
    about_cta_title: 'Вы можете изменить ситуацию',
    about_cta_desc: 'Поделитесь с близкими. Осведомлённость — первый шаг.',
    btn_back_home: 'На главную',

    prev_hero_title: 'Профилактика рака простаты',
    prev_hero_desc: 'Знайте факторы риска, меры профилактики и важность регулярных обследований.',
    risk_title: 'Факторы риска',
    risk_intro: 'Знание факторов риска — ключ. Одни контролируемы, другие нет.',
    risk_unctrl_title: '❌ Неконтролируемые факторы',
    risk_ctrl_title: '✓ Контролируемые факторы',
    risk_age_label: 'Возраст:',
    risk_age_desc: 'Риск растёт после 50',
    risk_family_label: 'Семейный анамнез:',
    risk_family_desc: 'Отец или брат болели раком',
    risk_ethnicity_label: 'Этническая принадлежность:',
    risk_ethnicity_desc: 'У чернокожих мужчин риск выше',
    risk_genetics_label: 'Генетика:',
    risk_genetics_desc: 'Наследуемые мутации',
    risk_diet_label: 'Питание:',
    risk_diet_desc: 'Жирная диета повышает риск',
    risk_weight_label: 'Вес:',
    risk_weight_desc: 'Ожирение связано с раком',
    risk_smoke_label: 'Курение:',
    risk_smoke_desc: 'Курение повышает риск',
    risk_alcohol_label: 'Алкоголь:',
    risk_alcohol_desc: 'Чрезмерное употребление вредно',

    tips_title: 'Советы по профилактике',
    tips_intro: 'Здоровые привычки — лучший способ предотвратить рак простаты.',
    tip_diet_title: 'Здоровое питание',
    tip_diet_desc: 'Сбалансированное питание необходимо:',
    tip_diet_1: 'Больше фруктов, овощей и цельнозерновых',
    tip_diet_2: 'Меньше красного и переработанного мяса',
    tip_diet_3: 'Ограничьте жирное и жареное',
    tip_diet_4: 'Продукты с ликопином (помидор, арбуз)',
    tip_diet_5: 'Источники селена (бразильский орех, тунец)',

    tip_activity_title: 'Регулярная физическая активность',
    tip_activity_desc: 'Регулярные упражнения снижают риск:',
    tip_activity_1: 'Не менее 150 минут умеренной активности в неделю',
    tip_activity_2: 'Силовые тренировки 2 раза в неделю',
    tip_activity_3: 'Выбирайте любимые занятия (ходьба, плавание, велосипед)',
    tip_activity_4: 'Поддерживайте здоровый вес',
    tip_activity_5: 'Избегайте малоподвижности',

    tip_avoid_title: 'Избегайте вредных привычек',
    tip_avoid_desc: 'Некоторые сильно повышают риск:',
    tip_avoid_1: 'Не курите и избегайте пассивного курения',
    tip_avoid_2: 'Ограничьте алкоголь',
    tip_avoid_3: 'Избегайте ультрапереработанных продуктов',
    tip_avoid_4: 'Снижайте стресс методами релаксации',
    tip_avoid_5: 'Хорошо спите (7–9 часов)',

    tip_exams_title: 'Регулярные обследования',
    tip_exams_desc: 'Ранняя диагностика — ключ:',
    tip_exams_1: 'В 50 лет — оценка риска у уролога',
    tip_exams_2: 'При семейном анамнезе — с 40',
    tip_exams_3: 'Чернокожим мужчинам — с 40 (высокий риск)',
    tip_exams_4: 'Анализ PSA (кровь) и пальцевое ректальное обследование',
    tip_exams_5: 'Ежегодно или по рекомендации врача',

    wa_send_title: 'Получать советы через WhatsApp',
    wa_send_desc: 'Введите номер с кодом страны (например, +55) и отправьте советы.',
    wa_send_btn: 'Отправить советы на мой WhatsApp',
    wa_privacy_note: 'Используется только официальный ссылочный формат WhatsApp.',

    wa_contact_title: 'Связаться со специалистом в WhatsApp',
    wa_contact_desc: 'Предзаполненное сообщение с советами и место для ваших вопросов.',
    wa_contact_btn: 'Отправить специалисту',
    wa_contact_note: 'Настройте номер специалиста в scripts.js.',

    doctor_title: 'Когда обращаться к врачу?',
    doctor_intro: 'Обратитесь к урологу при следующих симптомах:',
    symptom_1: '🚽 Затруднённое мочеиспускание или слабая струя',
    symptom_2: '🌙 Частые позывы, особенно ночью',
    symptom_3: '🔥 Боль или жжение при мочеиспускании',
    symptom_4: '🩸 Кровь в моче или сперме',
    symptom_5: '💙 Боль в спине, бедре или тазу',
    symptom_6: '⚡ Эректильная дисфункция',
    doctor_note: '<strong>Помните:</strong> симптомы могут иметь другие причины. Нужна оценка врача.',

    prev_cta_title: 'Позаботьтесь сегодня — живите лучше завтра',
    prev_cta_desc: 'Профилактика — лучший путь. Регулярно посещайте врача и ведите здоровый образ жизни.',
    btn_about_novembro: 'Узнать о Голубом Ноябре',
    btn_back_home: 'На главную'
  },
  // ---- Español ----
  es:  {
  title_home: 'Noviembre Azul - Concienciación y Prevención',
  title_about: 'Acerca de - Noviembre Azul',
  title_prev: 'Prevención - Noviembre Azul',
  brand: 'Noviembre Azul',
  nav_home: 'Inicio',
  nav_about: 'Acerca de',
  nav_prevention: 'Prevención',
  hero_title: 'Noviembre <span class="blue">Azul</span>',
  hero_desc: 'Un movimiento mundial dedicado a la salud del hombre y la prevención del cáncer de próstata. Cuidarse es un acto de valentía.',
  btn_learn_more: 'Saber más',
  btn_know_campaign: 'Conocer la campaña',
  stat_1_value: '1 de cada 9',
  stat_1_label: 'Hombres desarrollan cáncer de próstata',
  stat_2_value: '95%',
  stat_2_label: 'Tasa de supervivencia con diagnóstico precoz',
  stat_3_value: '50+',
  stat_3_label: 'Edad recomendada para empezar la prevención',
  features_title: 'Por qué Noviembre Azul es importante',
  feature_prev_title: 'Prevención',
  feature_prev_desc: 'Conocer los factores de riesgo y adoptar hábitos saludables es esencial para prevenir el cáncer de próstata.',
  feature_dx_title: 'Diagnóstico precoz',
  feature_dx_desc: 'Detectar la enfermedad en etapas iniciales aumenta significativamente las posibilidades de cura.',
  feature_awareness_title: 'Concienciación',
  feature_awareness_desc: 'Promover el diálogo y romper tabúes sobre la salud masculina salva vidas.',
  feature_qol_title: 'Calidad de vida',
  feature_qol_desc: 'Cuidar la salud integral del hombre mejora la calidad de vida.',
  cta_title: 'Cuídate. Prevén. Vive mejor.',
  cta_desc: 'No esperes a que aparezcan síntomas. Consulta al médico regularmente y conoce los factores de riesgo.',
  cta_btn: 'Consejos de prevención',
  footer_brand: 'Noviembre Azul',
  footer_desc: 'Concienciación sobre la salud del hombre y prevención del cáncer de próstata.',
  footer_nav: 'Navegación',
  footer_resources: 'Recursos',
  footer_bottom: 'Concienciación sobre la salud masculina. Todos los derechos reservados.',

  about_hero_title: '¿Qué es Noviembre Azul?',
  about_hero_desc: 'Una campaña global sobre la salud masculina y la importancia de la prevención del cáncer de próstata.',
  about_history_title: 'Historia y Origen',
  about_history_p1: 'Noviembre Azul comenzó en Australia en 2003 como una forma de concienciar sobre la salud masculina. La campaña se expandió a muchos países, llegando a Brasil en 2011.',
  about_history_p2: 'El color azul fue elegido como símbolo y noviembre se dedica especialmente a la concienciación sobre el cáncer de próstata.',
  about_objectives_title: 'Objetivos de la Campaña',
  obj_awareness_title: 'Concienciación',
  obj_awareness_desc: 'Informar a los hombres sobre la importancia de la prevención y el diagnóstico precoz del cáncer de próstata.',
  obj_dialog_title: 'Diálogo Abierto',
  obj_dialog_desc: 'Romper tabúes y promover conversaciones sobre salud masculina entre amigos, familia y profesionales.',
  obj_global_title: 'Movilización Global',
  obj_global_desc: 'Unir personas en todo el mundo en torno a la salud y el bienestar del hombre.',
  obj_qol_title: 'Calidad de Vida',
  obj_qol_desc: 'Promover hábitos saludables y cuidados integrales físicos y mentales.',
  about_why_title: 'Por qué es importante',
  about_why_1_title: 'Prevalencia de la enfermedad',
  about_why_1_desc: 'El cáncer de próstata es el segundo más común en hombres en Brasil. Aproximadamente 1 de cada 9 hombres lo desarrollará.',
  about_why_2_title: 'El diagnóstico precoz salva vidas',
  about_why_2_desc: 'Detectado en etapas iniciales, la tasa de supervivencia a 5 años es de aproximadamente 95%. El diagnóstico precoz es clave.',
  about_why_3_title: 'Salud integral del hombre',
  about_why_3_desc: 'La campaña va más allá del cáncer de próstata, abordando la salud integral (física, mental y emocional).',
  about_why_4_title: 'Romper tabúes',
  about_why_4_desc: 'Muchos hombres evitan hablar de salud o buscar ayuda médica. La campaña normaliza estas conversaciones.',
  about_stats_title: 'Datos importantes',
  about_stats_1_value: '65.000+',
  about_stats_1_desc: 'Nuevos casos de cáncer de próstata anuales en Brasil',
  about_stats_2_value: '15.000+',
  about_stats_2_desc: 'Muertes por cáncer de próstata por año en Brasil',
  about_stats_3_value: '50+',
  about_stats_3_desc: 'Edad recomendada para iniciar evaluación de riesgo con el médico',
  about_stats_4_value: '95%',
  about_stats_4_desc: 'Supervivencia a 5 años con diagnóstico precoz',
  about_cta_title: 'Puedes marcar la diferencia',
  about_cta_desc: 'Comparte este mensaje con amigos y familiares. La concienciación es el primer paso.',
  btn_back_home: 'Volver al inicio',

  prev_hero_title: 'Prevención del cáncer de próstata',
  prev_hero_desc: 'Conoce los factores de riesgo, medidas preventivas y la importancia de los exámenes regulares.',
  risk_title: 'Factores de riesgo',
  risk_intro: 'Conocerlos es fundamental. Algunos se pueden controlar, otros no.',
  risk_unctrl_title: '❌ Factores no controlables',
  risk_ctrl_title: '✓ Factores controlables',
  risk_age_label: 'Edad:',
  risk_age_desc: 'El riesgo aumenta después de los 50 años',
  risk_family_label: 'Historial familiar:',
  risk_family_desc: 'Padre o hermano con cáncer',
  risk_ethnicity_label: 'Etnia:',
  risk_ethnicity_desc: 'Los hombres negros tienen mayor riesgo',
  risk_genetics_label: 'Genética:',
  risk_genetics_desc: 'Mutaciones genéticas hereditarias',
  risk_diet_label: 'Alimentación:',
  risk_diet_desc: 'Una dieta rica en grasas aumenta el riesgo',
  risk_weight_label: 'Peso:',
  risk_weight_desc: 'La obesidad está asociada al cáncer',
  risk_smoke_label: 'Tabaco:',
  risk_smoke_desc: 'Fumar aumenta el riesgo',
  risk_alcohol_label: 'Alcohol:',
  risk_alcohol_desc: 'El consumo excesivo es perjudicial',

  tips_title: 'Consejos de prevención',
  tips_intro: 'Adoptar hábitos saludables es la mejor forma de prevenir el cáncer de próstata.',
  tip_diet_title: 'Alimentación saludable',
  tip_diet_desc: 'Una dieta equilibrada es esencial:',
  tip_diet_1: 'Aumenta frutas, verduras y cereales integrales',
  tip_diet_2: 'Reduce carne roja y procesada',
  tip_diet_3: 'Limita alimentos grasos y frituras',
  tip_diet_4: 'Incluye alimentos ricos en licopeno (tomate, sandía)',
  tip_diet_5: 'Consume alimentos con selenio (nuez de Brasil, atún)',

  tip_activity_title: 'Actividad física regular',
  tip_activity_desc: 'El ejercicio regular reduce el riesgo:',
  tip_activity_1: 'Al menos 150 minutos de actividad moderada por semana',
  tip_activity_2: 'Incluye ejercicios de resistencia 2 veces por semana',
  tip_activity_3: 'Elige actividades que disfrutes (caminar, nadar, ciclismo)',
  tip_activity_4: 'Mantén un peso saludable',
  tip_activity_5: 'Evita el sedentarismo',

  tip_avoid_title: 'Evita hábitos perjudiciales',
  tip_avoid_desc: 'Algunos aumentan significativamente el riesgo:',
  tip_avoid_1: 'No fumes y evita el humo pasivo',
  tip_avoid_2: 'Limita el consumo de alcohol',
  tip_avoid_3: 'Evita alimentos ultraprocesados',
  tip_avoid_4: 'Reduce el estrés con técnicas de relajación',
  tip_avoid_5: 'Duerme bien (7-9 horas por noche)',

  tip_exams_title: 'Exámenes regulares',
  tip_exams_desc: 'El diagnóstico precoz es fundamental:',
  tip_exams_1: 'Hombres de 50 años: consulta al urólogo para evaluar el riesgo',
  tip_exams_2: 'Historial familiar: empieza a los 40 años',
  tip_exams_3: 'Hombres negros: empieza a los 40 (mayor riesgo)',
  tip_exams_4: 'Exámenes: PSA (sangre) y tacto rectal',
  tip_exams_5: 'Frecuencia: anual o según orientación médica',

  wa_send_title: 'Recibir consejos por WhatsApp',
  wa_send_desc: 'Introduce tu número con código de país (ej: +55DDDNUM) y envía los consejos.',
  wa_send_btn: 'Enviar consejos a mi WhatsApp',
  wa_privacy_note: 'Usamos solo el enlace oficial de WhatsApp para abrir la conversación en tu dispositivo.',

  wa_contact_title: 'Hablar con un especialista por WhatsApp',
  wa_contact_desc: 'Mensaje predefinido con tus consejos y espacio para escribir libremente.',
  wa_contact_btn: 'Enviar mensaje al especialista',
  wa_contact_note: 'Configura el número del especialista en scripts.js.',

  doctor_title: '¿Cuándo acudir al médico?',
  doctor_intro: 'Consulta a un urólogo si presentas alguno de estos síntomas:',
  symptom_1: '🚽 Dificultad para orinar o flujo débil',
  symptom_2: '🌙 Micción frecuente, especialmente por la noche',
  symptom_3: '🔥 Dolor o ardor al orinar',
  symptom_4: '🩸 Sangre en la orina o en el semen',
  symptom_5: '💙 Dolor en la espalda, cadera o pelvis',
  symptom_6: '⚡ Disfunción eréctil',
  doctor_note: '<strong>Recuerda:</strong> estos síntomas pueden tener otras causas, pero es importante consultar al médico.',

  prev_cta_title: 'Cuídate hoy, vive mejor mañana',
  prev_cta_desc: 'La prevención es el mejor camino. Consulta al médico regularmente y adopta hábitos saludables.',
  btn_about_novembro: 'Saber más sobre Noviembre Azul',
  btn_back_home: 'Volver al inicio'
},
// ---- Deutsch ----
  de: {
  title_home: 'Blauer November – Bewusstsein und Prävention',
  title_about: 'Über – Blauer November',
  title_prev: 'Prävention – Blauer November',
  brand: 'Blauer November',
  nav_home: 'Startseite',
  nav_about: 'Über',
  nav_prevention: 'Prävention',
  hero_title: 'Blauer <span class="blue">November</span>',
  hero_desc: 'Eine weltweite Bewegung zur Sensibilisierung für Männergesundheit und zur Prävention von Prostatakrebs. Sich um sich selbst zu kümmern ist mutig.',
  btn_learn_more: 'Mehr erfahren',
  btn_know_campaign: 'Kampagne kennenlernen',
  stat_1_value: '1 von 9',
  stat_1_label: 'Männer entwickeln Prostatakrebs',
  stat_2_value: '95%',
  stat_2_label: 'Überlebensrate bei Früherkennung',
  stat_3_value: '50+',
  stat_3_label: 'Empfohlenes Alter für Prävention',
  features_title: 'Warum Blauer November wichtig ist',
  feature_prev_title: 'Prävention',
  feature_prev_desc: 'Risikofaktoren kennen und gesunde Gewohnheiten annehmen ist entscheidend, um Prostatakrebs vorzubeugen.',
  feature_dx_title: 'Früherkennung',
  feature_dx_desc: 'Frühe Diagnose erhöht die Heilungschancen erheblich.',
  feature_awareness_title: 'Bewusstsein',
  feature_awareness_desc: 'Dialog fördern und Tabus rund um Männergesundheit brechen rettet Leben.',
  feature_qol_title: 'Lebensqualität',
  feature_qol_desc: 'Ganzheitliche Männergesundheit verbessert die Lebensqualität.',
  cta_title: 'Kümmere dich. Vorbeugen. Besser leben.',
  cta_desc: 'Warte nicht auf Symptome. Gehe regelmäßig zum Arzt und kenne die Risikofaktoren.',
  cta_btn: 'Präventionstipps',
  footer_brand: 'Blauer November',
  footer_desc: 'Sensibilisierung für Männergesundheit und Prävention von Prostatakrebs.',
  footer_nav: 'Navigation',
  footer_resources: 'Ressourcen',
  footer_bottom: 'Aufklärung über Männergesundheit. Alle Rechte vorbehalten.',

  about_hero_title: 'Was ist Blauer November?',
  about_hero_desc: 'Eine globale Kampagne über Männergesundheit und die Bedeutung der Prävention von Prostatakrebs.',
  about_history_title: 'Geschichte und Ursprung',
  about_history_p1: 'Blauer November begann 2003 in Australien, um das Bewusstsein für Männergesundheit zu stärken, und verbreitete sich weltweit – in Brasilien seit 2011.',
  about_history_p2: 'Blau ist das Symbol der Kampagne, und der November ist der Aufklärung über Prostatakrebs gewidmet.',
  about_objectives_title: 'Ziele der Kampagne',
  obj_awareness_title: 'Bewusstsein',
  obj_awareness_desc: 'Männer über Prävention und frühe Diagnose von Prostatakrebs informieren.',
  obj_dialog_title: 'Offener Dialog',
  obj_dialog_desc: 'Tabus brechen und Gespräche über Männergesundheit fördern.',
  obj_global_title: 'Globale Mobilisierung',
  obj_global_desc: 'Menschen weltweit für die Gesundheit und das Wohlbefinden von Männern vereinen.',
  obj_qol_title: 'Lebensqualität',
  obj_qol_desc: 'Gesunde Gewohnheiten und umfassende körperliche und mentale Fürsorge fördern.',
  about_why_title: 'Warum es wichtig ist',
  about_why_1_title: 'Krankheitshäufigkeit',
  about_why_1_desc: 'Prostatakrebs ist der zweithäufigste Krebs bei Männern in Brasilien. Etwa 1 von 9 Männern erkrankt daran.',
  about_why_2_title: 'Früherkennung rettet Leben',
  about_why_2_desc: 'Bei früher Entdeckung beträgt die 5-Jahres-Überlebensrate etwa 95%. Früherkennung ist entscheidend.',
  about_why_3_title: 'Ganzheitliche Männergesundheit',
  about_why_3_desc: 'Die Kampagne geht über Prostatakrebs hinaus und adressiert die Gesundheit des Mannes insgesamt.',
  about_why_4_title: 'Tabus abbauen',
  about_why_4_desc: 'Viele Männer vermeiden Gesundheitsgespräche oder Arztbesuche. Die Kampagne normalisiert diese Gespräche.',
  about_stats_title: 'Wichtige Daten',
  about_stats_1_value: '65.000+',
  about_stats_1_desc: 'Neue Fälle pro Jahr in Brasilien',
  about_stats_2_value: '15.000+',
  about_stats_2_desc: 'Todesfälle pro Jahr in Brasilien',
  about_stats_3_value: '50+',
  about_stats_3_desc: 'Empfohlenes Alter zur Risikobewertung',
  about_stats_4_value: '95%',
  about_stats_4_desc: '5-Jahres-Überlebensrate bei Früherkennung',
  about_cta_title: 'Du kannst den Unterschied machen',
  about_cta_desc: 'Teile diese Botschaft mit Freunden und Familie. Bewusstsein ist der erste Schritt.',
  btn_back_home: 'Zur Startseite',

  prev_hero_title: 'Vorbeugung von Prostatakrebs',
  prev_hero_desc: 'Kenne Risikofaktoren, Präventionsmaßnahmen und die Bedeutung regelmäßiger Untersuchungen.',
  risk_title: 'Risikofaktoren',
  risk_intro: 'Sie zu kennen ist wesentlich. Manche sind kontrollierbar, andere nicht.',
  risk_unctrl_title: '❌ Nicht kontrollierbare Faktoren',
  risk_ctrl_title: '✓ Kontrollierbare Faktoren',
  risk_age_label: 'Alter:',
  risk_age_desc: 'Das Risiko steigt nach dem 50. Lebensjahr',
  risk_family_label: 'Familienanamnese:',
  risk_family_desc: 'Vater oder Bruder mit Krebs',
  risk_ethnicity_label: 'Ethnizität:',
  risk_ethnicity_desc: 'Schwarze Männer haben ein höheres Risiko',
  risk_genetics_label: 'Genetik:',
  risk_genetics_desc: 'Erbliche Genmutationen',
  risk_diet_label: 'Ernährung:',
  risk_diet_desc: 'Fettreiche Ernährung erhöht das Risiko',
  risk_weight_label: 'Gewicht:',
  risk_weight_desc: 'Adipositas ist mit Krebs assoziiert',
  risk_smoke_label: 'Rauchen:',
  risk_smoke_desc: 'Rauchen erhöht das Risiko',
  risk_alcohol_label: 'Alkohol:',
  risk_alcohol_desc: 'Übermäßiger Konsum ist schädlich',

  tips_title: 'Präventionstipps',
  tips_intro: 'Gesunde Gewohnheiten sind der beste Weg, Prostatakrebs vorzubeugen.',
  tip_diet_title: 'Gesunde Ernährung',
  tip_diet_desc: 'Eine ausgewogene Ernährung ist essenziell:',
  tip_diet_1: 'Mehr Obst, Gemüse und Vollkorn',
  tip_diet_2: 'Weniger rotes und verarbeitetes Fleisch',
  tip_diet_3: 'Fettige und frittierte Speisen begrenzen',
  tip_diet_4: 'Lycopinreiche Lebensmittel einbeziehen (Tomate, Wassermelone)',
  tip_diet_5: 'Selenquellen konsumieren (Paranuss, Thunfisch)',

  tip_activity_title: 'Regelmäßige körperliche Aktivität',
  tip_activity_desc: 'Regelmäßige Bewegung senkt das Risiko:',
  tip_activity_1: 'Mindestens 150 Minuten moderate Aktivität pro Woche',
  tip_activity_2: 'Zweimal pro Woche Krafttraining hinzufügen',
  tip_activity_3: 'Aktivitäten wählen, die Freude machen (Gehen, Schwimmen, Radfahren)',
  tip_activity_4: 'Gesundes Körpergewicht halten',
  tip_activity_5: 'Sitzendes Verhalten vermeiden',

  tip_avoid_title: 'Schädliche Gewohnheiten vermeiden',
  tip_avoid_desc: 'Einige erhöhen das Risiko deutlich:',
  tip_avoid_1: 'Nicht rauchen und Passivrauchen vermeiden',
  tip_avoid_2: 'Alkoholkonsum begrenzen',
  tip_avoid_3: 'Hochverarbeitete Lebensmittel vermeiden',
  tip_avoid_4: 'Stress mit Entspannungstechniken reduzieren',
  tip_avoid_5: 'Gut schlafen (7–9 Stunden pro Nacht)',

  tip_exams_title: 'Regelmäßige Untersuchungen',
  tip_exams_desc: 'Früherkennung ist grundlegend:',
  tip_exams_1: 'Männer ab 50: Urologe zur Risikobewertung aufsuchen',
  tip_exams_2: 'Mit Familienanamnese: ab 40 beginnen',
  tip_exams_3: 'Schwarze Männer: ab 40 beginnen (höheres Risiko)',
  tip_exams_4: 'Untersuchungen: PSA (Blut) und digitale rektale Untersuchung',
  tip_exams_5: 'Häufigkeit: jährlich oder gemäß ärztlicher Empfehlung',

  wa_send_title: 'Tipps per WhatsApp erhalten',
  wa_send_desc: 'Gib deine Nummer mit Ländervorwahl an (z. B. +55DDDNUM) und sende die Tipps.',
  wa_send_btn: 'Tipps an mein WhatsApp senden',
  wa_privacy_note: 'Wir nutzen nur den offiziellen WhatsApp-Link, um den Chat auf deinem Gerät zu öffnen.',

  wa_contact_title: 'Mit Spezialist via WhatsApp sprechen',
  wa_contact_desc: 'Vorgefertigte Nachricht mit deinen Tipps und Platz für freie Texteingabe.',
  wa_contact_btn: 'Nachricht an den Spezialisten senden',
  wa_contact_note: 'Die Nummer des Spezialisten in scripts.js konfigurieren.',

  doctor_title: 'Wann zum Arzt?',
  doctor_intro: 'Konsultiere einen Urologen bei folgenden Symptomen:',
  symptom_1: '🚽 Schwierigkeiten beim Wasserlassen oder schwacher Harnfluss',
  symptom_2: '🌙 Häufiges Wasserlassen, besonders nachts',
  symptom_3: '🔥 Schmerzen oder Brennen beim Wasserlassen',
  symptom_4: '🩸 Blut im Urin oder Sperma',
  symptom_5: '💙 Schmerzen im Rücken, in der Hüfte oder im Becken',
  symptom_6: '⚡ Erektile Dysfunktion',
  doctor_note: '<strong>Hinweis:</strong> Diese Symptome können andere Ursachen haben. Eine ärztliche Abklärung ist wichtig.',

  prev_cta_title: 'Heute vorsorgen, morgen besser leben',
  prev_cta_desc: 'Prävention ist der beste Weg. Gehe regelmäßig zum Arzt und pflege gesunde Gewohnheiten.',
  btn_about_novembro: 'Mehr über Blauer November erfahren',
  btn_back_home: 'Zur Startseite'
}
};

// ====== Helpers ======
function setLang(lang) {
  const dict = I18N[lang] || I18N[DEFAULT_LANG];
  // Elements that replace textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = '';
      // Allow HTML in some labels? For normal, just text:
      el.innerHTML = dict[key];
    }
  });

  // Elements that specifically allow innerHTML (like hero title with span)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update document title if needed
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const key = titleEl.getAttribute('data-i18n');
    if (dict[key]) titleEl.textContent = dict[key];
  }

  // Persist selection
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

function initLang() {
  const saved = (() => {
    try { return localStorage.getItem('lang'); } catch (e) { return null; }
  })();
  const initial = saved || DEFAULT_LANG;
  const select = document.getElementById('langSelect');
  if (select) {
    select.value = initial;
    select.addEventListener('change', () => setLang(select.value));
  }
  setLang(initial);
}

// ====== WhatsApp integration ======

// Collect all visible tips into a single message string (current language)
function collectTipsText() {
  const chunks = [];
  const tipCards = document.querySelectorAll('#tipsContainer .tip-card');
  tipCards.forEach(card => {
    const title = card.querySelector('h3')?.textContent?.trim();
    if (title) chunks.push(`*${title}*`);
    const items = card.querySelectorAll('ul li');
    items.forEach(li => {
      const text = li.textContent.trim();
      if (text) chunks.push(`- ${text}`);
    });
    chunks.push(''); // blank line between cards
  });
  return chunks.join('\n').trim();
}

// Normalize phone: remove spaces/dashes, keep leading + if present (for display), but link needs digits only.
// For wa.me links, the number should be digits only, with country code.
function normalizePhoneForWA(input) {
  if (!input) return '';
  const digits = input.replace(/[^\d]/g, '');
  return digits;
}

// Open WhatsApp with given number and message
function openWhatsApp(numberDigits, message) {
  const textParam = encodeURIComponent(message);
  // wa.me requires digits only number
  const url = `https://wa.me/${numberDigits}?text=${textParam}`;
  window.open(url, '_blank');
}

function initWhatsAppActions() {
  const sendBtn = document.getElementById('sendTipsBtn');
  const contactBtn = document.getElementById('contactExpertBtn');

  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      const input = document.getElementById('userWhatsapp');
      const phoneRaw = input?.value || '';
      const phoneDigits = normalizePhoneForWA(phoneRaw);
      if (!phoneDigits) {
        alert('Digite um número de WhatsApp com código do país (ex: +55DDDNUM).');
        return;
      }
      const tipsText = collectTipsText();
      const msg = `Aqui estão as dicas de prevenção do Novembro Azul:\n\n${tipsText}\n\nCuide-se! 💙`;
      openWhatsApp(phoneDigits, msg);
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      const expert = SPECIALIST_NUMBER;
      const custom = (document.getElementById('customMessage')?.value || '').trim();
      if (!expert || !/^\d{6,}$/.test(expert)) {
        alert('Número do especialista não configurado. Ajuste em scripts.js.');
        return;
      }
      const tipsText = collectTipsText();
      const msgBase = `Olá! Gostaria de falar com um especialista.\n\nResumo das minhas dicas:\n${tipsText}`;
      const finalMsg = custom ? `${msgBase}\n\nMinha pergunta:\n${custom}` : msgBase;
      openWhatsApp(expert, finalMsg);
    });
  }
}

// ====== Init on DOM ready ======
document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initWhatsAppActions();
});
// Mapeia idioma -> flag e label para o seletor customizado
const LANG_UI = {
  pt: { label: 'Português', flag: 'https://flagcdn.com/w20/br.png', alt: 'Brasil' },
  en: { label: 'English',  flag: 'https://flagcdn.com/w20/us.png', alt: 'United States' },
  es: { label: 'Español',  flag: 'https://flagcdn.com/w20/es.png', alt: 'España' },
  de: { label: 'Deutsch',  flag: 'https://flagcdn.com/w20/de.png', alt: 'Deutschland' },
  ar: { label: 'العربية',  flag: 'https://flagcdn.com/w20/sa.png', alt: 'السعودية' },
  fr: { label: 'Français', flag: 'https://flagcdn.com/w20/fr.png', alt: 'France' },
  zh: { label: '中文',      flag: 'https://flagcdn.com/w20/cn.png', alt: '中国' },
  ru: { label: 'Русский',  flag: 'https://flagcdn.com/w20/ru.png', alt: 'Россия' }
};

function updateCustomSelectUI(lang) {
  const cfg = LANG_UI[lang] || LANG_UI[DEFAULT_LANG];
  const sel = document.querySelector('#langSelectCustom .selected');
  if (!sel) return;
  sel.innerHTML = `
    <img src="${cfg.flag}" alt="${cfg.alt}" />
    <span>${cfg.label}</span>
    <span class="arrow">▾</span>
  `;
}

function initLang() {
  // Carrega idioma salvo
  const saved = (() => { try { return localStorage.getItem('lang'); } catch (e) { return null; } })();
  const initial = saved || DEFAULT_LANG;
  setLang(initial);           // aplica traduções
  updateCustomSelectUI(initial); // atualiza bandeira/label

  // Wire do seletor customizado
  const root = document.getElementById('langSelectCustom');
  if (!root) return;

  const selected = root.querySelector('.selected');
  const options = root.querySelector('.options');

  // Abrir/fechar
  selected.addEventListener('click', () => {
    const expanded = root.getAttribute('aria-expanded') === 'true';
    root.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  });

  // Seleção
  options.querySelectorAll('button[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLang(lang);
      updateCustomSelectUI(lang);
      root.setAttribute('aria-expanded', 'false');
    });
  });

  // Clique fora para fechar
  document.addEventListener('click', (e) => {
    if (!root.contains(e.target)) {
      root.setAttribute('aria-expanded', 'false');
    }
  });

  // Tecla Esc para fechar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      root.setAttribute('aria-expanded', 'false');
    }
  });
}
