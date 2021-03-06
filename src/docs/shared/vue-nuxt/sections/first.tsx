import { DocVueNuxtType } from '@/utils/globalTypes';
import { FolderIcon, JsIcon, VueIcon } from '@/components/icons/icons';

const SharedVueFirstSection = ({ section, version }: DocVueNuxtType) => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">File Structure</h2>
    <div className="pl-2">
      <div className="flex mb-3 mt-4">
        <FolderIcon />
        <span className="pl-2">src</span>
      </div>
      <div className="flex mb-3 pl-5">
        <FolderIcon />
        <span className="pl-2">components</span>
      </div>
      <div className="flex mb-3 pl-5">
        <FolderIcon />
        <span className="pl-2">dashboard</span>
      </div>
      <div className="flex mb-3 pl-11">
        <FolderIcon />
        <span className="pl-2">provider</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Provider.vue</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Overlay.vue</span>
      </div>
      <div className="flex mb-3 pl-11">
        <FolderIcon />
        <span className="pl-2">sidenavigation</span>
      </div>
      {version === 8 && (
        <div className="flex mb-3 pl-16">
          <FolderIcon />
          <span className="pl-2">accordion</span>
        </div>
      )}
      <div className="flex mb-3 pl-16">
        <FolderIcon />
        <span className="pl-2">icons</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Header.vue</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Index.vue</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Item.vue</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">items.vue</span>
      </div>
      {section && (
        <div className="flex mb-3 pl-16">
          <VueIcon />
          <span className="pl-2">Section.vue</span>
        </div>
      )}
      <div className="flex mb-3 pl-11">
        <FolderIcon />
        <span className="pl-2">topnavigation</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Index.vue</span>
      </div>
      <div className="flex mb-3 pl-11">
        <VueIcon />
        <span className="pl-2">Layout.vue</span>
      </div>
      <div className="flex mb-3 pl-3">
        <FolderIcon />
        <span className="pl-2">pages</span>
      </div>
      <div className="flex mb-3 pl-3">
        <JsIcon />
        <span className="pl-2">main.js</span>
      </div>
      <div className="flex mb-3 pl-3">
        <JsIcon />
        <span className="pl-2">routes.js</span>
      </div>
    </div>
  </section>
);

const SharedNuxtFirstSection = ({ section, version }: DocVueNuxtType) => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">File Structure</h2>
    <div className="pl-2">
      <div className="flex mb-3 mt-4">
        <FolderIcon />
        <span className="pl-2">components</span>
      </div>
      <div className="flex mb-3 pl-5">
        <FolderIcon />
        <span className="pl-2">dashboard</span>
      </div>
      <div className="flex mb-3 pl-11">
        <FolderIcon />
        <span className="pl-2">provider</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Provider.vue</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Overlay.vue</span>
      </div>
      <div className="flex mb-3 pl-11">
        <FolderIcon />
        <span className="pl-2">sidenavigation</span>
      </div>
      {version === 8 && (
        <div className="flex mb-3 pl-16">
          <FolderIcon />
          <span className="pl-2">accordion</span>
        </div>
      )}
      <div className="flex mb-3 pl-16">
        <FolderIcon />
        <span className="pl-2">icons</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Header.vue</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Index.vue</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Item.vue</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Items.vue</span>
      </div>
      {section && (
        <div className="flex mb-3 pl-16">
          <VueIcon />
          <span className="pl-2">Section.vue</span>
        </div>
      )}
      <div className="flex mb-3 pl-11">
        <FolderIcon />
        <span className="pl-2">topnavigation</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Index.vue</span>
      </div>
      <div className="flex mb-3 pl-11">
        <VueIcon />
        <span className="pl-2">Layout.vue</span>
      </div>
    </div>
    <div className="flex mb-3 mt-4">
      <FolderIcon />
      <span className="pl-2">layouts</span>
    </div>
    <div className="flex mb-3 mt-4">
      <FolderIcon />
      <span className="pl-2">pages</span>
    </div>
    <div className="flex mb-3 mt-4">
      <FolderIcon />
      <span className="pl-2">static</span>
    </div>
  </section>
);

export { SharedNuxtFirstSection, SharedVueFirstSection };
