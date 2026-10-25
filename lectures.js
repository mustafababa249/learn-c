window.LECTURES = [
 {
  "n": 1,
  "title": "Intro to C & Your First Program",
  "icon": "🚀",
  "concept": "Computers only understand binary. High-level languages like C are translated by a compiler into machine code before the program runs. C is small (32 keywords), fast, and gives low-level power; I/O comes from the standard library (stdio.h, math.h, string.h).",
  "analogy": "A compiler is a professional translator: you hand over the whole book (your program) once, and they return a complete translation in the computer's native tongue.",
  "syntax": [
   {
    "c": "#include <stdio.h>",
    "m": "loads the I/O library so printf exists"
   },
   {
    "c": "int main(void)",
    "m": "entry point; returns int to the OS (0 = success)"
   },
   {
    "c": "{ }",
    "m": "braces mark the function's scope"
   },
   {
    "c": "printf(\"...\\n\");",
    "m": "library call; \\n = new line"
   },
   {
    "c": "float x = 100.0;",
    "m": "declare a decimal variable, then ;"
   }
  ],
  "code": "#include <stdio.h>\n\nint main(void) {\n    float fahr = 100.0;                         /* 1. fixed input   */\n    float celsius;\n    celsius = (5.0 / 9.0) * (fahr - 32.0);      /* 2. calculate     */\n    printf(\"Fahrenheit: %f\\n\", fahr);           /* 3. print         */\n    printf(\"Celsius:    %f\\n\", celsius);\n    return 0;\n}",
  "stdin": "",
  "explain": [
   "Execution starts at main(), the 'boss' function.",
   "5.0 / 9.0 uses decimals. With ints, 5 / 9 would be 0.",
   "%f is the placeholder for a float value."
  ],
  "trace": [
   {
    "t": "float fahr = 100.0; reserves a box and stores 100.0",
    "mem": {
     "fahr": 100.0
    },
    "hi": null
   },
   {
    "t": "float celsius; reserves a box but it holds garbage (uninitialised)",
    "mem": {
     "fahr": 100.0,
     "celsius": "?"
    },
    "hi": null
   },
   {
    "t": "(5.0/9.0) * (100-32) = 0.5556 * 68",
    "mem": {
     "fahr": 100.0,
     "celsius": "?"
    },
    "hi": null
   },
   {
    "t": "celsius receives 37.7778",
    "mem": {
     "fahr": 100.0,
     "celsius": 37.7778
    },
    "hi": null
   },
   {
    "t": "printf copies both values to the screen",
    "mem": {
     "fahr": 100.0,
     "celsius": 37.7778
    },
    "hi": null
   }
  ],
  "pitfalls": [
   "Writing 5/9 (ints) gives 0, so the whole formula collapses to 0.",
   "Forgetting ; ends the statement. C ignores whitespace, so ; is the only terminator.",
   "Forgetting #include <stdio.h> means printf is unknown."
  ],
  "tips": [
   "Always return 0 from main on success.",
   "Use the standard library instead of reinventing basics.",
   "Modern C (C99+) lets you declare variables anywhere, not only at the top of a block."
  ],
  "quiz": [
   {
    "q": "Which translates the whole program before it runs?",
    "o": [
     "Interpreter",
     "Compiler",
     "Assembler's mnemonic",
     "Virtual machine only"
    ],
    "a": 1,
    "w": "A compiler translates everything to machine code first."
   },
   {
    "q": "What does int main(void) return 0 signal?",
    "o": [
     "Syntax error",
     "Success to the OS",
     "Zero arguments",
     "End of file"
    ],
    "a": 1,
    "w": "0 tells the operating system the run succeeded."
   },
   {
    "q": "What is 5 / 9 with ints in C?",
    "o": [
     "0.5556",
     "1",
     "0",
     "Compile error"
    ],
    "a": 2,
    "w": "Integer division truncates, so the result is 0."
   }
  ],
  "out": "Fahrenheit: 100.000000\nCelsius:    37.777779\n",
  "ar": {
   "title": "مقدمة في لغة C وأول برنامج",
   "concept": "الحاسوب لا يفهم إلا اللغة الثنائية (0 و1). اللغات عالية المستوى مثل C يحوّلها المترجم (Compiler) إلى لغة الآلة قبل التشغيل. لغة C صغيرة (32 كلمة محجوزة فقط) وسريعة وتعطيك تحكماً قريباً من العتاد، أما الإدخال والإخراج فتأتي من المكتبات القياسية (stdio.h و math.h و string.h).",
   "analogy": "المترجم مثل مترجم محترف: تسلّمه الكتاب كله (برنامجك) مرة واحدة فيرجع لك ترجمة كاملة بلغة الحاسوب الأم.",
   "syntax": [
    "تحميل مكتبة الإدخال والإخراج حتى تعمل printf",
    "نقطة بداية البرنامج؛ ترجع رقماً للنظام (0 تعني نجاح)",
    "الأقواس المعقوفة تحدد نطاق الدالة",
    "استدعاء دالة مكتبة؛ \\n تعني سطراً جديداً",
    "تعريف متغير عشري ثم الفاصلة المنقوطة ;"
   ],
   "explain": [
    "التنفيذ يبدأ من main()، وهي «المدير» الذي ينسّق كل شيء.",
    "5.0 / 9.0 تستخدم الكسور العشرية، أما 5 / 9 بأعداد صحيحة فتساوي 0.",
    "%f هو المكان المحجوز لطباعة قيمة عشرية (float)."
   ],
   "trace": [
    "float fahr = 100.0; يحجز صندوقاً في الذاكرة ويخزن فيه 100.0",
    "float celsius; يحجز صندوقاً لكنه يحتوي قيمة عشوائية (غير مهيأ)",
    "(5.0/9.0) * (100-32) = 0.5556 * 68",
    "celsius تستقبل القيمة 37.7778",
    "printf تنسخ القيمتين إلى الشاشة"
   ],
   "pitfalls": [
    "كتابة 5/9 بأعداد صحيحة تعطي 0 فتنهار المعادلة كلها.",
    "نسيان ; في نهاية الجملة؛ لأن C تتجاهل المسافات والفاصلة المنقوطة هي المنهي الوحيد.",
    "نسيان #include <stdio.h> يجعل printf غير معروفة."
   ],
   "tips": [
    "أرجِع 0 من main عند النجاح دائماً.",
    "استخدم المكتبة القياسية ولا تعيد اختراع العجلة.",
    "في C99 وما بعدها يمكنك تعريف المتغيرات في أي مكان وليس فقط أعلى الكتلة."
   ],
   "quiz": [
    {
     "q": "أي واحد يترجم البرنامج كله قبل التشغيل؟",
     "w": "المترجم (Compiler) يحوّل البرنامج كله إلى لغة الآلة أولاً."
    },
    {
     "q": "ماذا يعني return 0 في main؟",
     "w": "الرقم 0 يخبر نظام التشغيل أن البرنامج نجح."
    },
    {
     "q": "كم تساوي 5 / 9 بأعداد صحيحة في C؟",
     "w": "قسمة الأعداد الصحيحة تحذف الكسر فالناتج 0."
    }
   ]
  },
  "theory": [
   [
    "Machine language: the only language a computer truly understands is binary (1s and 0s). Entered originally via physical switches (transistors), later written in hexadecimal. Tedious, error-prone, feasible only for tiny programs.",
    "لغة الآلة: اللغة الوحيدة التي يفهمها الحاسوب هي الثنائية (0 و1). كانت تُدخل أولاً بمفاتيح فيزيائية (ترانزستورات) ثم صارت تُكتب بالنظام السداسي عشر. مملة وكثيرة الأخطاء ومناسبة للبرامج الصغيرة جداً."
   ],
   [
    "Assembly language: uses mnemonics (MOV = move data, ADD = addition) that map directly to machine instructions. Needs an assembler to translate to binary. Low-level (tied to hardware) and non-portable: code for one processor must be rewritten for another.",
    "لغة التجميع (Assembly): رموز مختصرة (MOV لنقل البيانات، ADD للجمع) تقابل تعليمات الآلة مباشرة، وتحتاج مجمّعاً (Assembler) لتحويلها إلى ثنائي. منخفضة المستوى ومرتبطة بالعتاد وغير قابلة للنقل: كل معالج يحتاج إعادة كتابة."
   ],
   [
    "High-level languages (1950s/60s: Fortran, Algol): focus on program flow, not hardware. Introduced subroutines, loops and conditionals. Hardware independent and portable: write once, run on different machines.",
    "اللغات عالية المستوى (الخمسينات والستينات: Fortran و Algol): تركز على تدفق البرنامج لا على العتاد، وأدخلت الإجراءات الفرعية والحلقات والشروط. مستقلة عن المعالج وقابلة للنقل: تكتب مرة وتعمل على أجهزة مختلفة."
   ],
   [
    "Compilation (C, C++): a compiler translates the entire program to machine code before it runs. Fastest execution, but needs full re-translation after every code change.",
    "الترجمة (Compilation) مثل C و C++: المترجم يحوّل البرنامج كاملاً إلى لغة الآلة قبل التشغيل. أسرع تنفيذ لكن يلزم إعادة الترجمة بعد كل تعديل."
   ],
   [
    "Interpretation (Python, MATLAB): an interpreter reads and executes instructions on the fly. Generally slower, but great for rapid testing since there is no compile wait.",
    "التفسير (Interpretation) مثل Python و MATLAB: المفسّر يقرأ وينفذ التعليمات لحظة بلحظة. أبطأ عموماً لكنه ممتاز للتجريب السريع لأنه لا ينتظر الترجمة."
   ],
   [
    "Virtual machines (Java): code is compiled to intermediate byte-code, which a Virtual Machine interprets. A balance of speed and portability.",
    "الآلات الافتراضية (Java): يُترجم الكود إلى شفرة وسيطة (Byte-code) ثم تفسرها آلة افتراضية. توازن بين السرعة وقابلية النقل."
   ],
   [
    "Goal of high-level programming: communicate a software design to other programmers. Modularity (pluggable modules) lets big programs be built from small pieces. Readability is king; making the program fast is mainly the compiler's job.",
    "هدف البرمجة عالية المستوى: توصيل تصميم البرنامج للمبرمجين الآخرين. التقسيم إلى وحدات (Modules) يبني برامج كبيرة من قطع صغيرة. الوضوح أهم شيء، وجعل البرنامج سريعاً مهمة المترجم أساساً."
   ],
   [
    "C is general-purpose: operating systems, numerical computing, graphics, and embedded devices (washing machines, microwaves, car systems). It is a 'middle' language: high-level structures (loops, logic) plus low-level power (direct memory and byte manipulation).",
    "C لغة عامة الأغراض: أنظمة التشغيل والحسابات العددية والرسوميات والأجهزة المدمجة (غسالة، ميكروويف، أنظمة السيارات). هي لغة «وسطى»: تراكيب عالية المستوى (حلقات ومنطق) مع قوة منخفضة المستوى (تحكم مباشر بالذاكرة والبايتات)."
   ],
   [
    "C is 'small': only 32 keywords, so one can realistically master the entire language. It is spartan: no built-in operations for objects such as lists, no automatic memory management, and no built-in input/output commands.",
    "C لغة «صغيرة»: 32 كلمة محجوزة فقط فيمكن إتقانها كاملة. وهي «مقتصدة»: لا عمليات جاهزة للكائنات مثل القوائم، ولا إدارة ذاكرة تلقائية، ولا أوامر إدخال وإخراج مدمجة."
   ],
   [
    "Most power comes from the Standard Library, e.g. printf(). Use it instead of reinventing the wheel: it is tested, correct and portable across systems.",
    "معظم القوة تأتي من المكتبة القياسية مثل printf(). استخدمها ولا تعيد اختراع العجلة: فهي مجرَّبة وصحيحة وتعمل على الأنظمة المختلفة."
   ],
   [
    "Famous libraries: <stdio.h> input/output (printf, scanf); <math.h> math (sqrt, sin, cos); <string.h> text handling (strcpy to copy, strlen for length).",
    "مكتبات مشهورة: <stdio.h> للإدخال والإخراج (printf و scanf)، <math.h> للرياضيات (sqrt و sin و cos)، <string.h> للنصوص (strcpy للنسخ و strlen للطول)."
   ],
   [
    "Every C program is built from functions (groups of statements doing a task) and variables (containers for data). main() is the entry point; it returns an int to the OS (usually 0 = success); void means no arguments; { } define its scope.",
    "كل برنامج C يتكون من دوال (مجموعات جمل تؤدي مهمة) ومتغيرات (حاويات للبيانات). main() نقطة البداية وترجع int لنظام التشغيل (غالباً 0 = نجاح)، وvoid تعني بلا معاملات، والأقواس { } تحدد النطاق."
   ],
   [
    "Comments /* ... */ are ignored by the compiler. #include <stdio.h> is required because C has no built-in I/O. Escape characters: \\n new line, \\t tab (about 4 spaces). The semicolon ; is mandatory because C is free-form (ignores extra spaces/new lines).",
    "التعليقات /* ... */ يتجاهلها المترجم. #include <stdio.h> ضرورية لأن C بلا إدخال وإخراج مدمج. محارف الهروب: \\n سطر جديد و \\t مسافة جدولة (حوالي 4 مسافات). الفاصلة المنقوطة ; إلزامية لأن C حرة الشكل (تتجاهل المسافات والأسطر الزائدة)."
   ],
   [
    "Why float, not int? int stores whole numbers only, so 5/9 becomes 0. float keeps decimals (98.6, 37.2); write 5.0/9.0 to force decimal math. %f is the float placeholder. C converts automatically when mixing int and float. In classic C, variables are declared at the start of a block.",
    "لماذا float وليس int؟ النوع int للأعداد الصحيحة فقط فيصبح 5/9 صفراً. float يحفظ الكسور (98.6 و37.2)، واكتب 5.0/9.0 لإجبار الحساب العشري. %f هو مكان القيمة العشرية. تحوّل C الأنواع تلقائياً عند الخلط بين int و float. وفي C الكلاسيكية تُعرَّف المتغيرات في بداية الكتلة."
   ]
  ]
 },
 {
  "n": 2,
  "title": "Types, Operators & Expressions",
  "icon": "🧮",
  "concept": "Variables are named storage, constants never change, operators act on values, and expressions combine them. Every variable has a type (char, int, float/double) that fixes its memory size and the operations allowed.",
  "analogy": "Variables are labelled jars: a jar for whole cookies (int), a jar for cookie crumbs with decimals (float), a jar for one sticker (char). The label says what may go inside.",
  "syntax": [
   {
    "c": "int x = 5;",
    "m": "type + name + initial value"
   },
   {
    "c": "#define PI 3.14159",
    "m": "text replacement before compiling (no ; and no =)"
   },
   {
    "c": "y = x++;",
    "m": "postfix: use x, then add 1"
   },
   {
    "c": "z = ++x;",
    "m": "prefix: add 1, then use x"
   },
   {
    "c": "18 % 7",
    "m": "modulus: remainder, integers only"
   }
  ],
  "code": "#include <stdio.h>\n#define PI 3.14159\n\nint main(void) {\n    int   students = 150;\n    float average  = 72.45f;\n    char  grade    = 'B';\n    int x = 5, y, z;\n\n    printf(\"Students: %d | Average: %.2f | Grade: %c\\n\", students, average, grade);\n    y = x++;   /* postfix: y gets 5, then x becomes 6 */\n    z = ++x;   /* prefix:  x becomes 7, then z gets 7 */\n    printf(\"x=%d y=%d z=%d\\n\", x, y, z);\n    printf(\"17/5=%d  18%%7=%d  17/5.0=%.2f\\n\", 17 / 5, 18 % 7, 17 / 5.0);\n    printf(\"Circle area (r=5): %.2f\\n\", PI * 5 * 5);\n    return 0;\n}",
  "stdin": "",
  "explain": [
   "%d int, %f float, %c char, %s string, %e scientific.",
   "%.2f limits output to 2 decimals.",
   "Use %% to print a literal percent sign."
  ],
  "trace": [
   {
    "t": "int x = 5;",
    "mem": {
     "x": 5,
     "y": "?",
     "z": "?"
    },
    "hi": null
   },
   {
    "t": "y = x++ : y takes 5 first, then x becomes 6",
    "mem": {
     "x": 6,
     "y": 5,
     "z": "?"
    },
    "hi": null
   },
   {
    "t": "z = ++x : x becomes 7 first, then z takes 7",
    "mem": {
     "x": 7,
     "y": 5,
     "z": 7
    },
    "hi": null
   }
  ],
  "pitfalls": [
   "= assigns, == compares. if (x = 3) is almost always a bug.",
   "printf(\"%f\", 52) mismatches the type: undefined behaviour.",
   "%f prints 6 decimals: 72.45f shows as 72.449997 (floats are approximate). Use %.2f.",
   "Identifiers can't start with a digit or contain - or spaces; C is case-sensitive."
  ],
  "tips": [
   "UPPER_CASE for constants, lowercase for variables.",
   "Prefer const double PI = 3.14159; for type safety.",
   "Avoid names starting with _ (reserved for libraries)."
  ],
  "quiz": [
   {
    "q": "After int x=5; int y=x++; what are x and y?",
    "o": [
     "x=5,y=5",
     "x=6,y=5",
     "x=6,y=6",
     "x=5,y=6"
    ],
    "a": 1,
    "w": "Postfix uses the old value, then increments."
   },
   {
    "q": "What is 18 % 7?",
    "o": [
     "2",
     "3",
     "4",
     "2.57"
    ],
    "a": 2,
    "w": "18 = 2*7 + 4, so the remainder is 4."
   },
   {
    "q": "Which is a valid identifier?",
    "o": [
     "user-age",
     "1stNumber",
     "_temp",
     "my age"
    ],
    "a": 2,
    "w": "Must start with a letter or _, with no hyphens or spaces."
   }
  ],
  "out": "Students: 150 | Average: 72.45 | Grade: B\nx=7 y=5 z=7\n17/5=3  18%7=4  17/5.0=3.40\nCircle area (r=5): 78.54\n",
  "ar": {
   "title": "الأنواع والمعاملات والتعبيرات",
   "concept": "المتغيرات أماكن تخزين مسماة، والثوابت قيم لا تتغير، والمعاملات (Operators) تنفّذ العمليات، والتعبيرات تجمعها. لكل متغير نوع (char و int و float/double) يحدد حجمه في الذاكرة والعمليات المسموحة عليه.",
   "analogy": "المتغيرات برطمانات عليها ملصقات: برطمان للبسكويت الصحيح (int)، وآخر للفتات بالكسور (float)، وآخر لملصق واحد (char). الملصق يحدد ما يُسمح بوضعه داخله.",
   "syntax": [
    "النوع + الاسم + القيمة الابتدائية",
    "استبدال نصي قبل الترجمة (بدون ; وبدون =)",
    "بعدية: استخدم x ثم زد عليه 1",
    "قبلية: زد 1 على x ثم استخدمه",
    "باقي القسمة: للأعداد الصحيحة فقط"
   ],
   "explain": [
    "%d صحيح، %f عشري، %c حرف، %s نص، %e علمي.",
    "%.2f تحدد رقمين بعد الفاصلة.",
    "اكتب %% لطباعة علامة النسبة نفسها."
   ],
   "trace": [
    "int x = 5;",
    "y = x++ : تأخذ y القيمة 5 أولاً ثم تصبح x تساوي 6",
    "z = ++x : تصبح x تساوي 7 أولاً ثم تأخذ z القيمة 7"
   ],
   "pitfalls": [
    "= للإسناد و == للمقارنة؛ كتابة if (x = 3) خطأ منطقي غالباً.",
    "printf(\"%f\", 52) عدم تطابق في النوع وسلوك غير معرّف.",
    "%f تطبع 6 منازل: العدد 72.45f يظهر 72.449997 لأن الـ float تقريبي؛ استخدم %.2f.",
    "الاسم لا يبدأ برقم ولا يحتوي - أو مسافة، واللغة حساسة لحالة الأحرف."
   ],
   "tips": [
    "الثوابت بأحرف كبيرة والمتغيرات بأحرف صغيرة.",
    "الأفضل const double PI = 3.14159; لأنها تحفظ النوع.",
    "تجنب الأسماء التي تبدأ بـ _ فهي محجوزة للمكتبات."
   ],
   "quiz": [
    {
     "q": "بعد int x=5; int y=x++; كم قيمة x و y؟",
     "w": "البعدية تستخدم القيمة القديمة ثم تزيد."
    },
    {
     "q": "كم تساوي 18 % 7؟",
     "w": "18 = 2×7 + 4 فالباقي 4."
    },
    {
     "q": "أي اسم متغير صحيح؟",
     "w": "يبدأ بحرف أو _ ولا يحتوي - أو مسافة."
    }
   ]
  },
  "theory": [
   [
    "Four core concepts: Variables (named storage), Constants (fixed values), Operators (symbols for actions like +, *), Expressions (combinations giving a value). Example: int result = (x + y) * 2;",
    "أربعة مفاهيم أساسية: المتغيرات (أماكن تخزين مسماة)، الثوابت (قيم ثابتة)، المعاملات (رموز العمليات مثل + و *)، التعبيرات (تركيبات تعطي قيمة). مثال: int result = (x + y) * 2;"
   ],
   [
    "Identifier rules: letters, digits and _ only; must not start with a digit; case-sensitive (Total != total). Invalid: user-age, total$, my age, 1stNumber, 90percent. Valid: studentAge, item_12, _temp.",
    "قواعد المعرّفات: أحرف وأرقام و _ فقط؛ لا تبدأ برقم؛ حساسة لحالة الأحرف (Total غير total). غير صحيح: user-age و total$ و my age و 1stNumber و 90percent. صحيح: studentAge و item_12 و _temp."
   ],
   [
    "32 reserved keywords (int, while, return...) cannot be names. Style: lowercase for variables, UPPERCASE for constants (MAX_VALUE), short local names, descriptive global names (calculate_monthly_revenue), avoid leading _ (reserved for system libraries).",
    "32 كلمة محجوزة (int و while و return...) لا تصلح أسماء. الأسلوب: أحرف صغيرة للمتغيرات وكبيرة للثوابت (MAX_VALUE)، أسماء قصيرة للمحلية ووصفية للعامة (calculate_monthly_revenue)، وتجنب البدء بـ _ لأنها محجوزة لمكتبات النظام."
   ],
   [
    "C is typed: every variable needs a declared type so the compiler allocates memory correctly and catches errors early. Basic types: char (single letter, one byte), int (whole numbers), float/double (decimals). A type defines the values an object can hold and the operations allowed on it.",
    "C لغة ذات أنواع: كل متغير يجب أن يُعرَّف نوعه ليخصص المترجم الذاكرة بشكل صحيح ويكتشف الأخطاء مبكراً. الأنواع الأساسية: char (حرف واحد، بايت واحد)، int (أعداد صحيحة)، float/double (كسور). النوع يحدد القيم الممكنة والعمليات المسموحة."
   ],
   [
    "Integer constants: 1234 is int; 1234L long; 1234U unsigned; 1234UL unsigned long. Numbers too big for int are treated as long automatically.",
    "الثوابت الصحيحة: 1234 من نوع int، و1234L من نوع long، و1234U بلا إشارة (unsigned)، و1234UL من نوع unsigned long. الأعداد الأكبر من int تُعامل long تلقائياً."
   ],
   [
    "Number bases: decimal 1234; octal starts with 0 (02322); hexadecimal starts with 0x (0x4D2). All three are stored as the exact same binary value. Print with %d (decimal), %o (octal), %x (hex).",
    "الأنظمة العددية: عشري 1234؛ ثماني يبدأ بـ 0 (02322)؛ سداسي عشر يبدأ بـ 0x (0x4D2). الثلاثة تُخزَّن بنفس القيمة الثنائية تماماً. الطباعة: %d عشري و%o ثماني و%x سداسي عشر."
   ],
   [
    "Symbolic constants: #define NAME value (no = and no ;). The preprocessor does a direct text replacement before compiling. Works for int (BLOCK_SIZE 100), strings (HELLO \"Hello World\\n\") and floats (EXP 2.7183).",
    "الثوابت الرمزية: #define NAME value (بدون = وبدون ;). المعالج المسبق يستبدل النص مباشرة قبل الترجمة. تصلح للأعداد الصحيحة (BLOCK_SIZE 100) والنصوص (HELLO) والعشرية (EXP 2.7183)."
   ],
   [
    "printf specifiers: %c character, %f float (decimal), %e scientific (2.000000e+03), %s string, %d integer. The specifier must match the variable's type; printf(\"%f\", 52) is a mismatch and prints garbage or crashes.",
    "محددات printf: %c حرف، %f عشري، %e علمي (2.000000e+03)، %s نص، %d صحيح. يجب أن يطابق المحدد نوع المتغير؛ printf(\"%f\", 52) عدم تطابق ويطبع قيماً عشوائية أو ينهار."
   ],
   [
    "Declarations: variables must be declared before use, at the top of a block (classic C), and may be initialised: int lower, upper, step; char buf[10]; float limit = 9.34f; const double PI = 3.1416;",
    "التعريفات: يجب تعريف المتغير قبل استخدامه وفي أعلى الكتلة (C الكلاسيكية)، ويمكن تهيئته: int lower, upper, step; char buf[10]; float limit = 9.34f; const double PI = 3.1416;"
   ],
   [
    "Arithmetic: + - * work on ints and floats. / on ints truncates (17 / 5 = 3). % gives the remainder (18 % 7 = 4) and only works on int/char. Unary + - set the sign; ++ and -- add or subtract 1 (x++ means x = x + 1).",
    "العمليات الحسابية: + - * للصحيح والعشري. القسمة / على الصحيح تحذف الكسر (17 / 5 = 3). % تعطي الباقي (18 % 7 = 4) وتعمل على int و char فقط. + و - الأحاديتان للإشارة؛ و ++ و -- تزيدان أو تنقصان 1 (x++ تعني x = x + 1)."
   ],
   [
    "Prefix ++x: increment first, then use the value. Postfix x++: use the value first, then increment.",
    "القبلية ++x: تزيد أولاً ثم تستخدم القيمة. البعدية x++: تستخدم القيمة أولاً ثم تزيد."
   ],
   [
    "Relational operators (<, >, <=, >=, ==, !=) give 1 (TRUE) or 0 (FALSE). Never confuse = (assignment, x = 3) with == (equality test, x == 3). Logical: && AND (both true), || OR (at least one), ! NOT (reverses). With a=1, b=2, c=3, d=3: (a<b && b<c && c<d) is 0 because 3<3 is false; with c<=d it is 1.",
    "العمليات العلاقية (< و > و <= و >= و == و !=) تعطي 1 (صحيح) أو 0 (خطأ). لا تخلط بين = (إسناد x = 3) و == (اختبار مساواة x == 3). المنطقية: && (و: الاثنان صحيحان)، || (أو: واحد على الأقل)، ! (النفي). مع a=1,b=2,c=3,d=3: التعبير (a<b && b<c && c<d) يساوي 0 لأن 3<3 خطأ، ومع c<=d يساوي 1."
   ]
  ]
 },
 {
  "n": 3,
  "title": "Input with scanf & Decisions (if / if-else)",
  "icon": "🔀",
  "concept": "scanf reads keyboard input into a variable's memory address (hence &). if runs a block only when a condition is true; if-else chooses exactly one of two blocks.",
  "analogy": "scanf is a mail slot: you must give it the mailbox address (&num), not the letter. if-else is a fork in the road: you take exactly one path.",
  "syntax": [
   {
    "c": "scanf(\"%d\", &num);",
    "m": "format + ADDRESS of the variable"
   },
   {
    "c": "if (num % 2 == 0)",
    "m": "condition in parentheses; no 'then' in C"
   },
   {
    "c": "{ ... }",
    "m": "always use braces, even for one line"
   },
   {
    "c": "else { ... }",
    "m": "no condition; catches everything else"
   }
  ],
  "code": "#include <stdio.h>\n\nint main(void) {\n    int num;\n    printf(\"Enter an integer: \");\n    scanf(\"%d\", &num);\n\n    if (num % 2 == 0) {\n        printf(\"%d is an EVEN number.\\n\", num);\n    } else {\n        printf(\"%d is an ODD number.\\n\", num);\n    }\n    return 0;\n}",
  "stdin": "7\n",
  "explain": [
   "& gives scanf the memory address to write into.",
   "num % 2 is the remainder after dividing by 2.",
   "Exactly one of the two blocks ever runs."
  ],
  "trace": [
   {
    "t": "int num; reserves a box (garbage inside)",
    "mem": {
     "num": "?"
    },
    "hi": null
   },
   {
    "t": "scanf stores the typed 7 at &num",
    "mem": {
     "num": 7
    },
    "hi": null
   },
   {
    "t": "7 % 2 == 0 ? 1 == 0 is FALSE, skip the if block",
    "mem": {
     "num": 7,
     "num % 2": 1
    },
    "hi": null
   },
   {
    "t": "else block runs: prints ODD",
    "mem": {
     "num": 7,
     "num % 2": 1
    },
    "hi": null
   }
  ],
  "pitfalls": [
   "scanf(\"%d\", num) without & is a bug and may crash.",
   "Use scanf(\" %c\", &ch) with a leading space to skip leftover newlines.",
   "Don't compare floats with ==; tiny rounding errors make it unreliable.",
   "else never takes a condition: else (x>1) is wrong."
  ],
  "tips": [
   "Several inputs: scanf(\"%d %d %d\", &d, &m, &y); order must match.",
   "Always braces { } to avoid bugs when adding lines later."
  ],
  "quiz": [
   {
    "q": "Correct scanf call for int age?",
    "o": [
     "scanf(\"%d\", age);",
     "scanf(\"%d\", &age);",
     "scanf(\"%f\", &age);",
     "scanf(&age);"
    ],
    "a": 1,
    "w": "scanf needs the variable's address."
   },
   {
    "q": "In if-else, how many blocks run?",
    "o": [
     "Both",
     "Exactly one",
     "None",
     "Depends on break"
    ],
    "a": 1,
    "w": "They are mutually exclusive."
   },
   {
    "q": "Which is wrong?",
    "o": [
     "if (x > 5)",
     "else (x < 5)",
     "else {",
     "if (x == 5) {"
    ],
    "a": 1,
    "w": "else has no condition."
   }
  ],
  "out": "Enter an integer: 7\n7 is an ODD number.\n",
  "ar": {
   "title": "الإدخال بـ scanf وجمل القرار (if / if-else)",
   "concept": "الدالة scanf تقرأ من لوحة المفاتيح وتخزن القيمة في عنوان المتغير (لذلك نكتب &). الجملة if تنفذ كتلة فقط عند تحقق الشرط، وif-else تختار واحدة من اثنتين بالضبط.",
   "analogy": "scanf فتحة بريد: تعطيها عنوان الصندوق (&num) وليس الرسالة. وif-else مفترق طرق: تسلك طريقاً واحداً فقط.",
   "syntax": [
    "صيغة القراءة + عنوان المتغير",
    "الشرط بين أقواس؛ لا توجد كلمة then في C",
    "استخدم الأقواس { } دائماً حتى لسطر واحد",
    "else بدون شرط؛ تلتقط كل ما عدا ذلك"
   ],
   "explain": [
    "& يعطي scanf عنوان الذاكرة لتكتب فيه.",
    "num % 2 هو باقي القسمة على 2.",
    "كتلة واحدة فقط من الاثنتين تُنفَّذ."
   ],
   "trace": [
    "int num; يحجز صندوقاً (قيمة عشوائية)",
    "scanf تخزن الرقم 7 المكتوب في &num",
    "7 % 2 == 0 ؟ أي 1 == 0 خطأ، تُتخطى كتلة if",
    "تُنفَّذ كتلة else وتطبع ODD (فردي)"
   ],
   "pitfalls": [
    "scanf(\"%d\", num) بدون & خطأ وقد يسبب انهيار البرنامج.",
    "استخدم scanf(\" %c\", &ch) مع مسافة قبل %c لتجاوز سطر جديد متبقٍّ.",
    "لا تقارن الأعداد العشرية بـ == بسبب أخطاء التقريب.",
    "else لا تأخذ شرطاً: else (x>1) خطأ."
   ],
   "tips": [
    "عدة مدخلات: scanf(\"%d %d %d\", &d, &m, &y); والترتيب يجب أن يتطابق.",
    "استخدم الأقواس { } دائماً لتجنب الأخطاء عند إضافة أسطر لاحقاً."
   ],
   "quiz": [
    {
     "q": "ما الصيغة الصحيحة لـ scanf مع int age؟",
     "w": "scanf تحتاج عنوان المتغير (&)."
    },
    {
     "q": "في if-else كم كتلة تُنفَّذ؟",
     "w": "كتلة واحدة فقط، فهما متنافيتان."
    },
    {
     "q": "أي سطر خطأ؟",
     "w": "else لا تأخذ شرطاً."
    }
   ]
  }
 },
 {
  "n": 4,
  "title": "else-if Ladder & switch",
  "icon": "🪜",
  "concept": "An else-if ladder tests mutually exclusive conditions top to bottom and runs only the first match. switch compares one integer/char expression against constant cases.",
  "analogy": "The ladder is a bouncer checking a list top-down: the first rule that matches lets you in and everyone below is ignored. switch is an elevator panel: press a floor, jump straight there.",
  "syntax": [
   {
    "c": "if (...) {} else if (...) {} else {}",
    "m": "first true branch wins"
   },
   {
    "c": "switch (expr)",
    "m": "expr must be int or char"
   },
   {
    "c": "case 'B':",
    "m": "constant value, unique per case"
   },
   {
    "c": "break;",
    "m": "exit the switch; without it execution falls through"
   },
   {
    "c": "default:",
    "m": "optional catch-all"
   }
  ],
  "code": "#include <stdio.h>\n\nint main(void) {\n    int score;\n    char grade;\n    printf(\"Enter score (0-100): \");\n    scanf(\"%d\", &score);\n\n    if (score >= 90)      grade = 'A';\n    else if (score >= 80) grade = 'B';\n    else if (score >= 70) grade = 'C';\n    else if (score >= 60) grade = 'D';\n    else                  grade = 'F';\n\n    switch (grade) {\n        case 'A': printf(\"Excellent!\\n\");  break;\n        case 'B': printf(\"Very good.\\n\");  break;\n        case 'C': printf(\"Good.\\n\");       break;\n        case 'D': printf(\"Pass.\\n\");       break;\n        default:  printf(\"Out of range / fail.\\n\");\n    }\n    printf(\"Grade: %c\\n\", grade);\n    return 0;\n}",
  "stdin": "85\n",
  "explain": [
   "Order matters: >=90 is tested first, so >=80 needs no upper bound.",
   "switch only tests equality; chars work because they are integers.",
   "default catches anything unmatched."
  ],
  "trace": [
   {
    "t": "score = 85 read from keyboard",
    "mem": {
     "score": 85,
     "grade": "?"
    },
    "hi": null
   },
   {
    "t": "85 >= 90 ? FALSE, go to next else if",
    "mem": {
     "score": 85,
     "grade": "?"
    },
    "hi": null
   },
   {
    "t": "85 >= 80 ? TRUE: grade = 'B', skip the rest of the ladder",
    "mem": {
     "score": 85,
     "grade": "B"
    },
    "hi": null
   },
   {
    "t": "switch(grade) matches case 'B', prints, break exits",
    "mem": {
     "score": 85,
     "grade": "B"
    },
    "hi": null
   }
  ],
  "pitfalls": [
   "Forgetting break makes execution fall through into the next case.",
   "Duplicate case values are a compile error.",
   "switch cannot test ranges or floats; use if-else for those.",
   "Wrong order (>=60 first) makes every pass score a 'D'."
  ],
  "tips": [
   "The last else is your safety net for invalid input.",
   "Use switch for menus and fixed-value choices."
  ],
  "quiz": [
   {
    "q": "With score=85, how many ladder conditions are tested (90,80,70,60)?",
    "o": [
     "1",
     "2",
     "3",
     "4"
    ],
    "a": 1,
    "w": "85>=90 fails, 85>=80 succeeds, then it stops."
   },
   {
    "q": "What happens if you omit break in a matching case?",
    "o": [
     "Compile error",
     "Falls through to next case",
     "Program exits",
     "Nothing"
    ],
    "a": 1,
    "w": "Execution continues into the following cases."
   },
   {
    "q": "switch (x) can test which?",
    "o": [
     "x > 5",
     "float x",
     "int/char equality",
     "strings"
    ],
    "a": 2,
    "w": "Only integer-type equality."
   }
  ],
  "out": "Enter score (0-100): 85\nVery good.\nGrade: B\n",
  "ar": {
   "title": "سلّم else-if وجملة switch",
   "concept": "سلّم else-if يفحص شروطاً متنافية من الأعلى للأسفل وينفذ أول شرط محقق فقط. أما switch فتقارن تعبيراً صحيحاً أو حرفاً واحداً مع حالات ثابتة.",
   "analogy": "السلّم حارس بوابة يفحص قائمة من الأعلى: أول قاعدة تنطبق عليك تُدخلك ويُهمَل الباقي. وswitch لوحة مصعد: تضغط رقم الطابق فتذهب إليه مباشرة.",
   "syntax": [
    "أول فرع صحيح هو الذي ينفذ",
    "التعبير يجب أن يكون int أو char",
    "قيمة ثابتة وفريدة لكل case",
    "الخروج من switch؛ بدونها يستمر التنفيذ إلى الحالة التالية",
    "حالة اختيارية تلتقط أي قيمة غير مطابقة"
   ],
   "explain": [
    "الترتيب مهم: فُحص >=90 أولاً فلا نحتاج حداً أعلى لـ >=80.",
    "switch تختبر المساواة فقط، والحرف يعمل لأنه عدد صحيح داخلياً.",
    "default تلتقط كل ما لم يطابق."
   ],
   "trace": [
    "score = 85 مقروءة من لوحة المفاتيح",
    "85 >= 90 ؟ خطأ، انتقل إلى else if التالية",
    "85 >= 80 ؟ صحيح: grade = 'B' وتُتخطى بقية السلّم",
    "switch(grade) تطابق case 'B' وتطبع ثم break تخرج"
   ],
   "pitfalls": [
    "نسيان break يجعل التنفيذ «يسقط» إلى الحالة التالية.",
    "تكرار قيمة case خطأ في الترجمة.",
    "switch لا تفحص مجالات ولا أعداداً عشرية؛ استخدم if-else.",
    "ترتيب خاطئ (>=60 أولاً) يجعل كل الناجحين يأخذون D."
   ],
   "tips": [
    "else الأخيرة شبكة أمان للمدخلات غير الصالحة.",
    "استخدم switch للقوائم والخيارات ذات القيم الثابتة."
   ],
   "quiz": [
    {
     "q": "score=85: كم شرطاً يُفحص (90,80,70,60)؟",
     "w": "85>=90 يفشل و85>=80 ينجح ثم يتوقف الفحص."
    },
    {
     "q": "ماذا يحدث إن حذفنا break من case مطابق؟",
     "w": "التنفيذ يسقط إلى الحالات التالية."
    },
    {
     "q": "ماذا تفحص switch (x)؟",
     "w": "المساواة لأعداد صحيحة أو حروف فقط."
    }
   ]
  }
 },
 {
  "n": 5,
  "title": "The for Loop",
  "icon": "🔁",
  "concept": "A for loop repeats a block a known number of times: initialise once, test before each pass, run the body, then update.",
  "analogy": "Laps on a running track: you start at lap 1, check you haven't passed the last lap, run it, then tick the counter.",
  "syntax": [
   {
    "c": "for (",
    "m": "start loop"
   },
   {
    "c": "int i = 1;",
    "m": "1. initialise (runs once)"
   },
   {
    "c": "i <= 5;",
    "m": "2. test (before every pass)"
   },
   {
    "c": "i++",
    "m": "4. update (after the body)"
   },
   {
    "c": ") { body }",
    "m": "3. body runs if test was true"
   }
  ],
  "code": "#include <stdio.h>\n\nint main(void) {\n    int sum = 0;\n    for (int i = 1; i <= 5; i++) {\n        sum += i;\n        printf(\"i=%d  sum=%d\\n\", i, sum);\n    }\n    printf(\"Final sum: %d\\n\", sum);\n    return 0;\n}",
  "stdin": "",
  "explain": [
   "Order: init, test, body, update, test, body, ... until test is false.",
   "sum is an accumulator that starts at 0.",
   "i is scoped to the loop (C99+)."
  ],
  "trace": [
   {
    "t": "init i=1, sum=0",
    "mem": {
     "i": 1,
     "sum": 0
    },
    "hi": null
   },
   {
    "t": "test 1<=5 TRUE; sum = 0+1",
    "mem": {
     "i": 1,
     "sum": 1
    },
    "hi": null
   },
   {
    "t": "i++ -> 2; test TRUE; sum = 1+2",
    "mem": {
     "i": 2,
     "sum": 3
    },
    "hi": null
   },
   {
    "t": "i++ -> 3; sum = 3+3",
    "mem": {
     "i": 3,
     "sum": 6
    },
    "hi": null
   },
   {
    "t": "i++ -> 4; sum = 6+4",
    "mem": {
     "i": 4,
     "sum": 10
    },
    "hi": null
   },
   {
    "t": "i++ -> 5; sum = 10+5",
    "mem": {
     "i": 5,
     "sum": 15
    },
    "hi": null
   },
   {
    "t": "i++ -> 6; test 6<=5 FALSE, exit loop",
    "mem": {
     "i": 6,
     "sum": 15
    },
    "hi": null
   }
  ],
  "pitfalls": [
   "Semicolons separate for parts; a stray ; after ) makes an empty body.",
   "Off-by-one: < vs <= changes the iteration count.",
   "Forgetting braces runs only the first statement in the loop.",
   "Wrong direction (i-- with i<=5) creates an infinite loop."
  ],
  "tips": [
   "Count down with for (k=10; k>0; k--).",
   "Step by 2 with i += 2 (even numbers).",
   "Any of the three parts can be empty, but both ; stay."
  ],
  "quiz": [
   {
    "q": "How many times does for(i=1;i<=5;i++) run?",
    "o": [
     "4",
     "5",
     "6",
     "Infinite"
    ],
    "a": 1,
    "w": "i = 1,2,3,4,5."
   },
   {
    "q": "When is the test evaluated?",
    "o": [
     "After the body",
     "Before each body run",
     "Only once",
     "Never"
    ],
    "a": 1,
    "w": "Test-before, so the body may never run."
   },
   {
    "q": "Which counts down?",
    "o": [
     "for(i=10;i>0;i++)",
     "for(i=10;i>0;i--)",
     "for(i=0;i<10;i--)",
     "for(i=10;i<0;i--)"
    ],
    "a": 1,
    "w": "Start high, test >, decrement."
   }
  ],
  "out": "i=1  sum=1\ni=2  sum=3\ni=3  sum=6\ni=4  sum=10\ni=5  sum=15\nFinal sum: 15\n",
  "ar": {
   "title": "حلقة for",
   "concept": "حلقة for تكرر كتلة عدداً معروفاً من المرات: تهيئة مرة واحدة، فحص قبل كل دورة، تنفيذ الجسم، ثم التحديث.",
   "analogy": "لفّات في مضمار جري: تبدأ من اللفة 1، تتأكد أنك لم تتجاوز الأخيرة، تجريها، ثم تزيد العداد.",
   "syntax": [
    "بداية الحلقة",
    "1. التهيئة (مرة واحدة)",
    "2. الفحص (قبل كل دورة)",
    "4. التحديث (بعد الجسم)",
    "3. الجسم ينفذ إذا كان الفحص صحيحاً"
   ],
   "explain": [
    "الترتيب: تهيئة، فحص، جسم، تحديث، فحص، جسم... حتى يصبح الفحص خطأ.",
    "sum متغير تجميعي يبدأ من 0.",
    "i محصور داخل الحلقة (C99 وما بعدها)."
   ],
   "trace": [
    "تهيئة i=1 و sum=0",
    "فحص 1<=5 صحيح؛ sum = 0+1",
    "i++ فتصبح 2؛ الفحص صحيح؛ sum = 1+2",
    "i++ فتصبح 3؛ sum = 3+3",
    "i++ فتصبح 4؛ sum = 6+4",
    "i++ فتصبح 5؛ sum = 10+5",
    "i++ فتصبح 6؛ الفحص 6<=5 خطأ، الخروج من الحلقة"
   ],
   "pitfalls": [
    "فاصلة منقوطة زائدة بعد ) تجعل جسم الحلقة فارغاً.",
    "خطأ بواحد: < مقابل <= يغيّر عدد الدورات.",
    "بدون أقواس تتكرر أول جملة فقط.",
    "اتجاه خاطئ (i-- مع i<=5) يصنع حلقة لا نهائية."
   ],
   "tips": [
    "للعد التنازلي: for (k=10; k>0; k--).",
    "للقفز بخطوتين: i += 2 (الأعداد الزوجية).",
    "يمكن ترك أي جزء فارغاً لكن تبقى الفاصلتان المنقوطتان."
   ],
   "quiz": [
    {
     "q": "كم مرة تعمل for(i=1;i<=5;i++)؟",
     "w": "i = 1,2,3,4,5 أي 5 مرات."
    },
    {
     "q": "متى يُفحص الشرط؟",
     "w": "قبل كل دورة، فقد لا ينفذ الجسم أبداً."
    },
    {
     "q": "أي حلقة تعد تنازلياً؟",
     "w": "تبدأ من رقم كبير وتستخدم > والنقصان."
    }
   ]
  }
 },
 {
  "n": 6,
  "title": "Nested for Loops & while",
  "icon": "🧩",
  "concept": "A nested loop runs the inner loop completely for every outer iteration: n x m total runs. A while loop repeats while a condition is true, ideal when the count is unknown (sentinel-controlled).",
  "analogy": "Nested loops are a clock: the minute hand (inner) completes a full circle for every single tick of the hour hand (outer). while is 'keep stirring until the sugar dissolves'.",
  "syntax": [
   {
    "c": "for (i...) {",
    "m": "outer: runs n times"
   },
   {
    "c": "for (j...) {",
    "m": "inner: restarts each outer pass"
   },
   {
    "c": "printf(\"\\n\");",
    "m": "new line after each inner loop"
   },
   {
    "c": "while (number != -1)",
    "m": "entry-tested; may run 0 times"
   },
   {
    "c": "scanf(...) at loop end",
    "m": "read the next value to avoid an infinite loop"
   }
  ],
  "code": "#include <stdio.h>\n\nint main(void) {\n    for (int i = 1; i <= 3; i++) {        /* outer: rows    */\n        for (int j = 1; j <= i; j++) {    /* inner: columns */\n            printf(\"%d \", j);\n        }\n        printf(\"\\n\");\n    }\n\n    int number, sum = 0;\n    printf(\"Enter numbers (-1 to stop): \");\n    scanf(\"%d\", &number);                 /* first read before loop */\n    while (number != -1) {\n        sum += number;\n        scanf(\"%d\", &number);             /* next read at loop end  */\n    }\n    printf(\"Final Sum: %d\\n\", sum);\n    return 0;\n}",
  "stdin": "5\n10\n-1\n",
  "explain": [
   "Row i prints i numbers, so total prints = 1+2+3 = 6.",
   "The sentinel -1 is never added to the sum.",
   "The first scanf happens before the while test."
  ],
  "trace": [
   {
    "t": "i=1, j=1: prints '1', inner loop ends, newline",
    "mem": {
     "i": 1,
     "j": 1,
     "inner runs": 1
    },
    "hi": null
   },
   {
    "t": "i=2, j=1: prints '1'",
    "mem": {
     "i": 2,
     "j": 1,
     "inner runs": 2
    },
    "hi": null
   },
   {
    "t": "i=2, j=2: prints '2', newline",
    "mem": {
     "i": 2,
     "j": 2,
     "inner runs": 3
    },
    "hi": null
   },
   {
    "t": "i=3, j=1: prints '1'",
    "mem": {
     "i": 3,
     "j": 1,
     "inner runs": 4
    },
    "hi": null
   },
   {
    "t": "i=3, j=2: prints '2'",
    "mem": {
     "i": 3,
     "j": 2,
     "inner runs": 5
    },
    "hi": null
   },
   {
    "t": "i=3, j=3: prints '3', newline. Total inner runs = 6",
    "mem": {
     "i": 3,
     "j": 3,
     "inner runs": 6
    },
    "hi": null
   }
  ],
  "pitfalls": [
   "Reusing the same counter (i) in both loops breaks the logic.",
   "Forgetting to update the while variable gives an infinite loop.",
   "Printing \\n inside the inner loop instead of after it destroys the grid shape.",
   "The lecture's Example 4 shows output 1, 21, 321 but that code actually prints 1 / 1 2 / 1 2 3 (see the real output)."
  ],
  "tips": [
   "Total inner executions = outer count x inner count (when the bound is fixed).",
   "Use while for unknown counts, for for known counts."
  ],
  "quiz": [
   {
    "q": "Outer runs 4, inner runs 5. Inner body runs?",
    "o": [
     "9",
     "20",
     "4",
     "5"
    ],
    "a": 1,
    "w": "4 x 5 = 20."
   },
   {
    "q": "while (x < 5) with x=9 initially runs how many times?",
    "o": [
     "0",
     "1",
     "5",
     "Infinite"
    ],
    "a": 0,
    "w": "Test fails immediately."
   },
   {
    "q": "What is a sentinel value?",
    "o": [
     "A loop counter",
     "A value that signals stop",
     "A comment",
     "A pointer"
    ],
    "a": 1,
    "w": "e.g. -1 ends input."
   }
  ],
  "out": "1 \n1 2 \n1 2 3 \nEnter numbers (-1 to stop): 5 10 -1\nFinal Sum: 15\n",
  "ar": {
   "title": "الحلقات المتداخلة وحلقة while",
   "concept": "الحلقة المتداخلة تنفذ الحلقة الداخلية كاملة مع كل دورة للخارجية: إجمالي n × m. أما while فتكرر ما دام الشرط صحيحاً، وهي مثالية عندما يكون العدد مجهولاً (الحلقة الحارسة Sentinel).",
   "analogy": "الحلقات المتداخلة كالساعة: عقرب الدقائق (الداخلي) يكمل دورة كاملة مع كل نقرة لعقرب الساعات (الخارجي). وwhile مثل «استمر في التحريك حتى يذوب السكر».",
   "syntax": [
    "الخارجية: تنفذ n مرة",
    "الداخلية: تبدأ من جديد في كل دورة خارجية",
    "سطر جديد بعد انتهاء الحلقة الداخلية",
    "فحص قبل الدخول؛ قد لا تنفذ أبداً",
    "اقرأ القيمة التالية في نهاية الحلقة لتجنب اللانهائية"
   ],
   "explain": [
    "الصف i يطبع i أرقاماً، فالمجموع 1+2+3 = 6 طباعات.",
    "القيمة الحارسة -1 لا تُضاف إلى المجموع.",
    "أول scanf تتم قبل فحص while."
   ],
   "trace": [
    "i=1, j=1: تطبع '1' وتنتهي الداخلية ثم سطر جديد",
    "i=2, j=1: تطبع '1'",
    "i=2, j=2: تطبع '2' ثم سطر جديد",
    "i=3, j=1: تطبع '1'",
    "i=3, j=2: تطبع '2'",
    "i=3, j=3: تطبع '3' ثم سطر جديد. مجموع تنفيذات الداخلية = 6"
   ],
   "pitfalls": [
    "استخدام العداد نفسه (i) في الحلقتين يفسد المنطق.",
    "وضع \\n داخل الحلقة الداخلية بدل بعدها يخرّب شكل الشبكة.",
    "نسيان تحديث متغير while يصنع حلقة لا نهائية.",
    "مثال 4 في المحاضرة يعرض ناتجاً 1 / 21 / 321 لكن الكود يطبع فعلياً 1 / 1 2 / 1 2 3 (انظر الناتج الحقيقي)."
   ],
   "tips": [
    "مجموع تنفيذات الداخلية = عدد الخارجية × عدد الداخلية (عند ثبات الحدود).",
    "while للعدد المجهول، و for للعدد المعروف."
   ],
   "quiz": [
    {
     "q": "الخارجية 4 والداخلية 5: كم مرة ينفذ جسم الداخلية؟",
     "w": "4 × 5 = 20."
    },
    {
     "q": "while (x < 5) مع x=9 كم مرة تعمل؟",
     "w": "الشرط يفشل فوراً فلا تعمل أبداً."
    },
    {
     "q": "ما هي القيمة الحارسة (Sentinel)؟",
     "w": "قيمة مثل -1 تعني توقف."
    }
   ]
  }
 },
 {
  "n": 7,
  "title": "The do-while Loop",
  "icon": "♻️",
  "concept": "do-while is a post-test loop: the body runs first, the condition is checked afterward, so the body executes at least once.",
  "analogy": "Tasting soup: you must taste at least once before you can decide whether it needs more salt.",
  "syntax": [
   {
    "c": "do {",
    "m": "enter the body first"
   },
   {
    "c": "scanf(...);",
    "m": "body: read input"
   },
   {
    "c": "} while (number <= 0);",
    "m": "test AFTER the body; note the final ;"
   }
  ],
  "code": "#include <stdio.h>\n\nint main(void) {\n    int number;\n    do {\n        printf(\"Enter a positive number: \");\n        scanf(\"%d\", &number);\n    } while (number <= 0);\n\n    printf(\"Thank you! You entered: %d\\n\", number);\n    return 0;\n}",
  "stdin": "-3\n0\n8\n",
  "explain": [
   "Perfect for input validation: ask first, then check.",
   "The loop repeats while the input is invalid (<= 0).",
   "while loop = may run 0 times; do-while = at least once."
  ],
  "trace": [
   {
    "t": "body runs first: prompt, user types -3",
    "mem": {
     "number": -3
    },
    "hi": null
   },
   {
    "t": "test -3 <= 0 TRUE: repeat",
    "mem": {
     "number": -3
    },
    "hi": null
   },
   {
    "t": "body again: user types 0",
    "mem": {
     "number": 0
    },
    "hi": null
   },
   {
    "t": "test 0 <= 0 TRUE: repeat",
    "mem": {
     "number": 0
    },
    "hi": null
   },
   {
    "t": "body again: user types 8",
    "mem": {
     "number": 8
    },
    "hi": null
   },
   {
    "t": "test 8 <= 0 FALSE: exit loop",
    "mem": {
     "number": 8
    },
    "hi": null
   }
  ],
  "pitfalls": [
   "Forgetting the ; after while(...) is a syntax error.",
   "Using it when zero iterations should be possible (use while).",
   "Without braces, 'while (x);' can look like an empty loop."
  ],
  "tips": [
   "Great for menus: do { show menu } while (choice != 3);",
   "Always use braces for clarity."
  ],
  "quiz": [
   {
    "q": "Minimum times a do-while body runs?",
    "o": [
     "0",
     "1",
     "2",
     "Depends"
    ],
    "a": 1,
    "w": "Post-test means at least once."
   },
   {
    "q": "Where is the condition checked?",
    "o": [
     "Before body",
     "After body",
     "Never",
     "Inside body"
    ],
    "a": 1,
    "w": "At the bottom."
   },
   {
    "q": "Best use?",
    "o": [
     "Input validation / menus",
     "Reading arrays only",
     "Defining functions",
     "Comments"
    ],
    "a": 0,
    "w": "You need one attempt before judging."
   }
  ],
  "out": "Enter a positive number: -3\nEnter a positive number: 0\nEnter a positive number: 8\nThank you! You entered: 8\n",
  "ar": {
   "title": "حلقة do-while",
   "concept": "do-while حلقة فحصها بعد التنفيذ: الجسم يعمل أولاً ثم يُفحص الشرط، فهو ينفذ مرة واحدة على الأقل.",
   "analogy": "تذوق الشوربة: لازم تتذوق مرة قبل أن تقرر هل تحتاج ملحاً.",
   "syntax": [
    "ادخل الجسم أولاً",
    "داخل الجسم: اقرأ المدخل",
    "الفحص بعد الجسم؛ انتبه للفاصلة المنقوطة في النهاية"
   ],
   "explain": [
    "ممتازة للتحقق من المدخلات: اسأل أولاً ثم افحص.",
    "تكرر ما دام المدخل غير صالح (<= 0).",
    "while قد تنفذ صفر مرة، أما do-while فمرة على الأقل."
   ],
   "trace": [
    "الجسم يعمل أولاً: رسالة ثم يكتب المستخدم -3",
    "الفحص -3 <= 0 صحيح: كرر",
    "الجسم مرة أخرى: يكتب المستخدم 0",
    "الفحص 0 <= 0 صحيح: كرر",
    "الجسم مرة أخرى: يكتب المستخدم 8",
    "الفحص 8 <= 0 خطأ: الخروج من الحلقة"
   ],
   "pitfalls": [
    "نسيان ; بعد while(...) خطأ نحوي.",
    "استخدامها حين يلزم احتمال صفر تكرار (استخدم while).",
    "بدون أقواس قد يشبه while (x); حلقة فارغة."
   ],
   "tips": [
    "ممتازة للقوائم: do { اعرض القائمة } while (choice != 3);",
    "استخدم الأقواس دائماً للوضوح."
   ],
   "quiz": [
    {
     "q": "أقل عدد مرات لتنفيذ جسم do-while؟",
     "w": "الفحص بعد الجسم فيعمل مرة على الأقل."
    },
    {
     "q": "أين يُفحص الشرط؟",
     "w": "في نهاية الحلقة بعد الجسم."
    },
    {
     "q": "أفضل استخدام؟",
     "w": "تحتاج محاولة واحدة قبل الحكم: إدخال أو قائمة."
    }
   ]
  }
 },
 {
  "n": 8,
  "title": "One-Dimensional Arrays",
  "icon": "📦",
  "concept": "An array is a fixed-size run of same-type elements stored back-to-back in memory, accessed by index from 0 to size-1.",
  "analogy": "A row of lockers numbered from 0: every locker is the same size, they sit side by side, and you open one by its number.",
  "syntax": [
   {
    "c": "int data[] = {12,45,2,89,34,67};",
    "m": "size inferred = 6"
   },
   {
    "c": "data[0]",
    "m": "first element; last is data[n-1]"
   },
   {
    "c": "sizeof(data) / sizeof(data[0])",
    "m": "element count"
   },
   {
    "c": "for (i=1; i<n; i++)",
    "m": "traverse with a loop"
   }
  ],
  "code": "#include <stdio.h>\n\nint main(void) {\n    int data[] = {12, 45, 2, 89, 34, 67};\n    int n = sizeof(data) / sizeof(data[0]);   /* 24 / 4 = 6 */\n    int max = data[0];\n\n    for (int i = 1; i < n; i++) {\n        if (data[i] > max) {\n            max = data[i];                    /* new champion */\n        }\n    }\n    printf(\"Elements: %d, bytes: %zu\\n\", n, sizeof(data));\n    printf(\"Maximum value: %d\\n\", max);\n    return 0;\n}",
  "stdin": "",
  "explain": [
   "Start max at data[0], then compare the rest.",
   "6 ints x 4 bytes = 24 bytes (typical 4-byte int).",
   "Indices run 0..5."
  ],
  "trace": [
   {
    "t": "max = data[0] = 12",
    "mem": {
     "data": [
      12,
      45,
      2,
      89,
      34,
      67
     ],
     "i": "-",
     "max": 12
    },
    "hi": [
     "data",
     0
    ]
   },
   {
    "t": "i=1: 45 > 12, max = 45",
    "mem": {
     "data": [
      12,
      45,
      2,
      89,
      34,
      67
     ],
     "i": 1,
     "max": 45
    },
    "hi": [
     "data",
     1
    ]
   },
   {
    "t": "i=2: 2 > 45? no",
    "mem": {
     "data": [
      12,
      45,
      2,
      89,
      34,
      67
     ],
     "i": 2,
     "max": 45
    },
    "hi": [
     "data",
     2
    ]
   },
   {
    "t": "i=3: 89 > 45, max = 89",
    "mem": {
     "data": [
      12,
      45,
      2,
      89,
      34,
      67
     ],
     "i": 3,
     "max": 89
    },
    "hi": [
     "data",
     3
    ]
   },
   {
    "t": "i=4: 34 > 89? no",
    "mem": {
     "data": [
      12,
      45,
      2,
      89,
      34,
      67
     ],
     "i": 4,
     "max": 89
    },
    "hi": [
     "data",
     4
    ]
   },
   {
    "t": "i=5: 67 > 89? no. Done",
    "mem": {
     "data": [
      12,
      45,
      2,
      89,
      34,
      67
     ],
     "i": 5,
     "max": 89
    },
    "hi": [
     "data",
     5
    ]
   }
  ],
  "pitfalls": [
   "Off-by-one: array[5] of size 5 is out of bounds (valid 0..4).",
   "C does no bounds checking: garbage or a crash, not a friendly error.",
   "Size is fixed after declaration.",
   "Uninitialised local arrays hold garbage."
  ],
  "tips": [
   "int arr[5] = {0}; zero-fills everything.",
   "Use sizeof to compute n instead of hard-coding it.",
   "Loop with i < n, never i <= n."
  ],
  "quiz": [
   {
    "q": "Valid indices of int a[5]?",
    "o": [
     "1..5",
     "0..5",
     "0..4",
     "0..6"
    ],
    "a": 2,
    "w": "Zero-based: 0 to size-1."
   },
   {
    "q": "int a[]={1,2,3}; size is?",
    "o": [
     "Error",
     "2",
     "3",
     "Unknown"
    ],
    "a": 2,
    "w": "Inferred from the initialiser."
   },
   {
    "q": "Accessing a[10] when size is 5?",
    "o": [
     "Compile error always",
     "Undefined behaviour",
     "Returns 0",
     "Auto-resizes"
    ],
    "a": 1,
    "w": "C doesn't check bounds."
   }
  ],
  "out": "Elements: 6, bytes: 24\nMaximum value: 89\n",
  "ar": {
   "title": "المصفوفات أحادية البعد",
   "concept": "المصفوفة سلسلة ثابتة الحجم من عناصر من نوع واحد، متجاورة في الذاكرة، ويُوصل لكل عنصر بفهرس يبدأ من 0 وينتهي عند الحجم - 1.",
   "analogy": "صف خزائن مرقمة من 0: كلها بنفس الحجم، متجاورة، وتفتح الخزانة برقمها.",
   "syntax": [
    "الحجم يُستنتج = 6",
    "أول عنصر؛ وآخر عنصر هو data[n-1]",
    "عدد العناصر",
    "المرور على العناصر بحلقة"
   ],
   "explain": [
    "ابدأ max من data[0] ثم قارن بقية العناصر.",
    "6 أعداد × 4 بايت = 24 بايت (حجم int المعتاد 4).",
    "الفهارس من 0 إلى 5."
   ],
   "trace": [
    "max = data[0] = 12",
    "i=1: 45 > 12 فتصبح max = 45",
    "i=2: 2 > 45؟ لا",
    "i=3: 89 > 45 فتصبح max = 89",
    "i=4: 34 > 89؟ لا",
    "i=5: 67 > 89؟ لا. انتهينا"
   ],
   "pitfalls": [
    "خطأ بواحد: array[5] في مصفوفة حجمها 5 خارج الحدود (الصحيح 0..4).",
    "C لا تفحص الحدود: ستحصل على قيم عشوائية أو انهيار، دون رسالة خطأ.",
    "الحجم ثابت بعد التعريف.",
    "المصفوفات المحلية غير المهيأة تحتوي قيماً عشوائية."
   ],
   "tips": [
    "int arr[5] = {0}; تملأ كل العناصر أصفاراً.",
    "احسب n بـ sizeof بدل كتابته يدوياً.",
    "اكتب الحلقة i < n وليس i <= n."
   ],
   "quiz": [
    {
     "q": "ما فهارس int a[5] الصحيحة؟",
     "w": "من 0 إلى الحجم - 1."
    },
    {
     "q": "int a[]={1,2,3}; كم حجمها؟",
     "w": "يُستنتج من عدد القيم."
    },
    {
     "q": "الوصول إلى a[10] والحجم 5؟",
     "w": "C لا تفحص الحدود فالسلوك غير معرّف."
    }
   ]
  }
 },
 {
  "n": 9,
  "title": "Multi-Dimensional (2D) Arrays",
  "icon": "🧱",
  "concept": "A 2D array is a grid addressed by [row][column]. C stores it row by row in one contiguous block (row-major). Nested loops handle it: outer = rows, inner = columns.",
  "analogy": "A cinema seating chart: seat [row][seat]. In memory the rows are lined up end-to-end like one long bench.",
  "syntax": [
   {
    "c": "int A[2][2] = {{5,10},{15,20}};",
    "m": "inner braces = one row each"
   },
   {
    "c": "A[1][0]",
    "m": "row 1, column 0 = 15"
   },
   {
    "c": "result[i][j] = A[i][j] + B[i][j];",
    "m": "element-wise addition"
   },
   {
    "c": "for i ... for j ...",
    "m": "outer rows, inner columns"
   }
  ],
  "code": "#include <stdio.h>\n\nint main(void) {\n    int A[2][2] = {{5, 10}, {15, 20}};\n    int B[2][2] = {{1, 2},  {3, 4}};\n    int result[2][2];\n\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++) {\n            result[i][j] = A[i][j] + B[i][j];\n        }\n    }\n    printf(\"A + B =\\n\");\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++) {\n            printf(\"%d \", result[i][j]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
  "stdin": "",
  "explain": [
   "Matrix addition requires identical dimensions.",
   "Memory order: A[0][0], A[0][1], A[1][0], A[1][1].",
   "3x4 array = 12 elements; 6x4x2 = 48."
  ],
  "trace": [
   {
    "t": "result is empty (garbage)",
    "mem": {
     "A": [
      [
       5,
       10
      ],
      [
       15,
       20
      ]
     ],
     "B": [
      [
       1,
       2
      ],
      [
       3,
       4
      ]
     ],
     "result": [
      [
       "?",
       "?"
      ],
      [
       "?",
       "?"
      ]
     ]
    },
    "hi": [
     "result",
     [
      0,
      0
     ]
    ]
   },
   {
    "t": "[0][0]: 5+1 = 6",
    "mem": {
     "A": [
      [
       5,
       10
      ],
      [
       15,
       20
      ]
     ],
     "B": [
      [
       1,
       2
      ],
      [
       3,
       4
      ]
     ],
     "result": [
      [
       6,
       "?"
      ],
      [
       "?",
       "?"
      ]
     ]
    },
    "hi": [
     "result",
     [
      0,
      0
     ]
    ]
   },
   {
    "t": "[0][1]: 10+2 = 12",
    "mem": {
     "A": [
      [
       5,
       10
      ],
      [
       15,
       20
      ]
     ],
     "B": [
      [
       1,
       2
      ],
      [
       3,
       4
      ]
     ],
     "result": [
      [
       6,
       12
      ],
      [
       "?",
       "?"
      ]
     ]
    },
    "hi": [
     "result",
     [
      0,
      1
     ]
    ]
   },
   {
    "t": "[1][0]: 15+3 = 18",
    "mem": {
     "A": [
      [
       5,
       10
      ],
      [
       15,
       20
      ]
     ],
     "B": [
      [
       1,
       2
      ],
      [
       3,
       4
      ]
     ],
     "result": [
      [
       6,
       12
      ],
      [
       18,
       "?"
      ]
     ]
    },
    "hi": [
     "result",
     [
      1,
      0
     ]
    ]
   },
   {
    "t": "[1][1]: 20+4 = 24",
    "mem": {
     "A": [
      [
       5,
       10
      ],
      [
       15,
       20
      ]
     ],
     "B": [
      [
       1,
       2
      ],
      [
       3,
       4
      ]
     ],
     "result": [
      [
       6,
       12
      ],
      [
       18,
       24
      ]
     ]
    },
    "hi": [
     "result",
     [
      1,
      1
     ]
    ]
   }
  ],
  "pitfalls": [
   "Writing a[i,j] instead of a[i][j].",
   "Swapping row and column bounds in the loops.",
   "The lecture's 3x3 initialiser is malformed (stray comma, missing comma): write {{1,2,3},{4,5,6},{7,8,9}}.",
   "Missing initialisers default to 0, extras are an error."
  ],
  "tips": [
   "Only the first dimension may be omitted: int a[][3] = {...};",
   "Name loops i (row) and j (col) consistently."
  ],
  "quiz": [
   {
    "q": "In int m[3][4], m[1][2] is in which row?",
    "o": [
     "0",
     "1",
     "2",
     "3"
    ],
    "a": 1,
    "w": "First index is the row."
   },
   {
    "q": "How many elements in int c[6][4][2]?",
    "o": [
     "12",
     "24",
     "48",
     "8"
    ],
    "a": 2,
    "w": "6 x 4 x 2 = 48."
   },
   {
    "q": "C stores 2D arrays...",
    "o": [
     "Column by column",
     "Row by row",
     "Randomly",
     "Diagonally"
    ],
    "a": 1,
    "w": "Row-major order."
   }
  ],
  "out": "A + B =\n6 12 \n18 24 \n",
  "ar": {
   "title": "المصفوفات متعددة الأبعاد (ثنائية البعد)",
   "concept": "المصفوفة الثنائية شبكة يُوصل لعناصرها بـ [الصف][العمود]. تخزنها C صفاً بعد صف في كتلة واحدة متصلة (Row-major). نستخدم حلقتين متداخلتين: الخارجية للصفوف والداخلية للأعمدة.",
   "analogy": "مخطط مقاعد سينما: المقعد [الصف][الرقم]. وفي الذاكرة تصطف الصفوف طرفاً لطرف كمقعد طويل واحد.",
   "syntax": [
    "كل أقواس داخلية تمثل صفاً",
    "الصف 1 والعمود 0 = 15",
    "جمع العناصر المتناظرة",
    "الخارجية للصفوف والداخلية للأعمدة"
   ],
   "explain": [
    "جمع المصفوفات يتطلب أبعاداً متطابقة.",
    "ترتيب الذاكرة: A[0][0] ثم A[0][1] ثم A[1][0] ثم A[1][1].",
    "مصفوفة 3×4 تساوي 12 عنصراً؛ و6×4×2 تساوي 48."
   ],
   "trace": [
    "result فارغة (قيم عشوائية)",
    "[0][0]: 5+1 = 6",
    "[0][1]: 10+2 = 12",
    "[1][0]: 15+3 = 18",
    "[1][1]: 20+4 = 24"
   ],
   "pitfalls": [
    "كتابة a[i,j] بدل a[i][j].",
    "عكس حدود الصفوف والأعمدة في الحلقات.",
    "تعريف المصفوفة 3×3 في المحاضرة غير صحيح (فاصلة زائدة وأخرى ناقصة): اكتبها {{1,2,3},{4,5,6},{7,8,9}}.",
    "القيم الناقصة تُملأ أصفاراً أما الزائدة فخطأ."
   ],
   "tips": [
    "يمكن حذف البعد الأول فقط: int a[][3] = {...};",
    "سمِّ الحلقات i للصف و j للعمود باتساق."
   ],
   "quiz": [
    {
     "q": "في int m[3][4] العنصر m[1][2] في أي صف؟",
     "w": "الفهرس الأول هو الصف."
    },
    {
     "q": "كم عنصراً في int c[6][4][2]؟",
     "w": "6 × 4 × 2 = 48."
    },
    {
     "q": "كيف تخزن C المصفوفة الثنائية؟",
     "w": "صفاً بعد صف (Row-major)."
    }
   ]
  }
 }
];
