#include <pebble.h>

static Window *s_main_window;

static void received_callback(DictionaryIterator *iterator, void *context) {
  window_stack_pop_all(false);
}

static void init() {
  const uint32_t inbox_size = 64;
  const uint32_t outbox_size = 256;
  app_message_open(inbox_size, outbox_size);
  app_message_register_inbox_received(received_callback);
  s_main_window = window_create();
  window_stack_push(s_main_window, true);
}

static void deinit() {
  window_destroy(s_main_window);
}

int main() {
  init();
  app_event_loop();
  deinit();
}
