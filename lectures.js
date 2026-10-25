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
  "out": "Fahrenheit: 100.000000\nCelsius:    37.777779\n"
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
  "out": "Students: 150 | Average: 72.45 | Grade: B\nx=7 y=5 z=7\n17/5=3  18%7=4  17/5.0=3.40\nCircle area (r=5): 78.54\n"
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
  "out": "Enter an integer: 7\n7 is an ODD number.\n"
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
  "out": "Enter score (0-100): 85\nVery good.\nGrade: B\n"
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
  "out": "i=1  sum=1\ni=2  sum=3\ni=3  sum=6\ni=4  sum=10\ni=5  sum=15\nFinal sum: 15\n"
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
  "out": "1 \n1 2 \n1 2 3 \nEnter numbers (-1 to stop): 5 10 -1\nFinal Sum: 15\n"
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
  "out": "Enter a positive number: -3\nEnter a positive number: 0\nEnter a positive number: 8\nThank you! You entered: 8\n"
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
  "out": "Elements: 6, bytes: 24\nMaximum value: 89\n"
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
  "out": "A + B =\n6 12 \n18 24 \n"
 }
];
