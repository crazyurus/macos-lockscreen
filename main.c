#include <stdio.h>
#include <string.h>

#define VERSION "1.0.4"

extern int SACLockScreenImmediate(void);

int main(int argc, char* argv[]) {
  if (argc == 2) {
    if (
      strcmp(argv[1], "-v") == 0 ||
      strcmp(argv[1], "--version") == 0
    ) {
      printf("%s\n", VERSION);
      return 0;
    }
  }

  return SACLockScreenImmediate();
}
